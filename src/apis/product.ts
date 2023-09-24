import customAxios from 'apis'

export async function createProduct({
  title,
  categoryType,
  description,
  long,
  lat,
  startTime,
  endTime,
  gameType,
  maxParticipants,
  location,
}: any) {
  return await customAxios.post<null, any>('/api/v1/product/', {
    title,
    category_key: categoryType,
    description,
    location,
    latitude: lat,
    longitude: long,
    game_type: gameType,
    max_participants: maxParticipants,
    valid_start_time: startTime,
    valid_end_time: endTime,
    is_valid: true,
  })
}

export async function fetchProductList() {
  return await customAxios.get<null, any>('/api/v1/product/list')
}

export async function fetchProductDetail(id: number) {
  return await customAxios.get<null, any>(`/api/v1/product/21`)
}
