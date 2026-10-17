import { api } from './api';

interface BookingInformation {
  camperId: string;
  contactInfo: {
    name: string;
    email: string;
  };
}

interface BookCamperResponse {
  message: string;
}

export async function bookCamper({
  camperId,
  contactInfo,
}: BookingInformation): Promise<BookCamperResponse> {
  const { data } = await api.post<BookCamperResponse>(
    `/${camperId}/booking-requests`,
    contactInfo
  );

  return data;
}
