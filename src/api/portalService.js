import { apiClient } from './apiClient';
import { API_ENDPOINTS } from './config';

/**
 * Service to fetch existing backend data for dashboard & student stats,
 * with seamless fallback to realistic default data when endpoints are offline.
 */
export const portalService = {
  async getDashboardData() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PORTAL.DASHBOARD);
      if (response && response.data) {
        return { success: true, data: response.data, isLive: true };
      }
    } catch (error) {
      console.warn('[PortalService] Backend API not reached, supplying fallback data:', error.message);
    }

    // Default Fallback Data if API is not live
    return {
      success: true,
      isLive: false,
      data: {
        student: {
          name: 'Ananya Sharma',
          grade: 'Pre-K',
          room: 'Room 102 (Sunflowers)',
          checkInTime: '9:05 AM',
          status: 'Present',
          initials: 'AS'
        },
        vitals: {
          meals: { status: 'Ate well', detail: '100% finished' },
          water: { status: '3 Glasses', detail: 'Hydrated' },
          nap: { status: '45 mins', detail: 'Peaceful' },
          toileting: { status: 'Regular', detail: 'Independent' }
        },
        unit: {
          title: 'Floating & Sinking',
          description: 'Understanding buoyancy, density, and liquid displacement through structured play.',
          category: 'Cognitive Unit',
          skills: [
            { name: 'Predicting', detail: 'Formed hypotheses', icon: 'lightbulb' },
            { name: 'Observing', detail: 'Water displacement', icon: 'travel_explore' },
            { name: 'Comparing', detail: 'Weight & Materials', icon: 'balance' }
          ]
        },
        activity: {
          title: 'Which three things in your kitchen do you think will float?',
          description: 'Try an orange, a metal spoon, and a plastic lid in a bowl of water before bath time!'
        },
        teacherNote: {
          educator: 'Ms. Laura Martinez',
          role: 'Lead Educator',
          time: 'Classroom Sunflowers • 12:45 PM',
          text: '“Ananya showed great curiosity during our water play activity today! She immediately predicted the cork would float because it felt ‘fluffy and light.’ Wonderful intuition!”'
        }
      }
    };
  }
};
