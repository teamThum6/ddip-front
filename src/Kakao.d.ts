type KakaoError = {
  error: string
  error_description: string
}
type KakaoResponse = {
  token_type: string
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: number
  scope: string
}
type KakaoUserProfile = {
  id: number
  kakao_account: KakaoAccount
  synched_at: string
  connected_at: string
  properties: KakakoProfile
}
type KakakoProfile = {
  nickname: string
  profile_image: string | null
  thumbnail_image_url: string | null
  profile_needs_agreement?: boolean
}
type KakaoAccount = {
  profile: KakakoProfile
  email: string
  age_range: string | null
  birthday: string | null
  birthyear: string | null
  gender: 'female' | 'male'
  phone_number: string | null
  ci: string
}
