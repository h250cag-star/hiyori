-- ========================================
-- Hiyori MVP - Initial Schema
-- ========================================

-- profiles: ユーザープロファイル
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  postal_code TEXT,
  address TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  has_car BOOLEAN DEFAULT true,
  max_distance_minutes INT DEFAULT 90,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- children: 子供情報
CREATE TABLE children (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  birth_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE children ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own children" ON children FOR ALL USING (auth.uid() = profile_id);

-- spots: スポットマスタ
CREATE TABLE spots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  address TEXT,
  image_url TEXT,
  age_min INT DEFAULT 0,
  age_max INT DEFAULT 18,
  is_indoor BOOLEAN DEFAULT false,
  avg_stay_minutes INT DEFAULT 120,
  cost_adult INT DEFAULT 0,
  cost_child INT DEFAULT 0,
  parking_available BOOLEAN DEFAULT true,
  rating REAL,
  review_summary TEXT,
  source TEXT,
  source_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE spots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view active spots" ON spots FOR SELECT USING (active = true);

-- swipes: スワイプ履歴
CREATE TABLE swipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  spot_id UUID REFERENCES spots(id) ON DELETE CASCADE,
  action TEXT NOT NULL CHECK (action IN ('like', 'skip')),
  swiped_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, spot_id)
);

ALTER TABLE swipes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own swipes" ON swipes FOR ALL USING (auth.uid() = user_id);

-- plans: 確定済みプラン
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  target_date DATE NOT NULL,
  plan_data JSONB NOT NULL,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own plans" ON plans FOR ALL USING (auth.uid() = user_id);

-- daily_cards: 表示済みカード管理
CREATE TABLE daily_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  spot_id UUID REFERENCES spots(id) ON DELETE CASCADE,
  shown_date DATE NOT NULL DEFAULT CURRENT_DATE,
  UNIQUE(user_id, spot_id)
);

ALTER TABLE daily_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own daily cards" ON daily_cards FOR ALL USING (auth.uid() = user_id);
