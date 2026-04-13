export interface Profile {
  id: string
  display_name: string | null
  postal_code: string | null
  address: string | null
  lat: number | null
  lng: number | null
  has_car: boolean
  max_distance_minutes: number
}

export interface Child {
  id: string
  profile_id: string
  birth_date: string
}

export interface Spot {
  id: string
  name: string
  description: string | null
  category: string
  lat: number
  lng: number
  address: string | null
  image_url: string | null
  age_min: number
  age_max: number
  is_indoor: boolean
  avg_stay_minutes: number
  cost_adult: number
  cost_child: number
  parking_available: boolean
  rating: number | null
  review_summary: string | null
}

export interface Swipe {
  id: string
  user_id: string
  spot_id: string
  action: 'like' | 'skip'
  swiped_at: string
}

export interface PlanStep {
  type: 'move' | 'activity' | 'meal' | 'rest'
  time: string
  duration_min: number
  spot_name: string
  address?: string
  transport?: 'car' | 'train' | 'walk'
  route_type?: 'highway' | 'local'
  cost?: number
  notes?: string
  map_url?: string
}

export interface PlanData {
  title: string
  concept: string
  departure_time: string
  return_time: string
  total_cost: number
  total_distance_km?: number
  steps: PlanStep[]
  weather_note?: string
}

export interface Plan {
  id: string
  user_id: string
  target_date: string
  plan_data: PlanData
  status: 'confirmed' | 'completed' | 'cancelled'
}
