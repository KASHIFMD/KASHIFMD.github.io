import axios from 'axios';
const API_BASE_URL = 'http://15.207.56.200:8081';
const API_AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IiI7HlBk0Us8WOpTS-jbVpDrUK1CSl-CXR-SCdGrG5I';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': API_AUTH_TOKEN,
    'Content-Type': 'application/json',
    
  },
});
async function sendFeedback(feedbackText) {
  try {
    const response = await api.post('/landing_page/v1/feedback', {
      text: feedbackText,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw error;
  }
}
async function sendEarlyAccessRequest(userData) {
  try {
    const response = await api.post('/landing_page/v1/early_access', userData);
    return response.data;
  } catch (error) {
    console.error('Error sending early access request:', error);
    throw error;
  }
}
async function getEarlyAccessCount() {
  try {
    const response = await api.get('/landing_page/v1/early_access_cnt');
    return response.data.count;
    console.log(response.data.count)
  } catch (error) {
    console.error('Error fetching early access count:', error);
    throw error;
  }
}
async function sendWaitlistRequest(userData) {
  try {
    const response = await api.post('/landing_page/v1/wait_list', userData);
    return response.data;
  } catch (error) {
    console.error('Error sending waitlist request:', error);
    throw error;
  }
}
async function sendPollResponse(pollData) {
  try {
    const response = await api.post('/landing_page/v1/category_poll', pollData);
    return response.data;
  } catch (error) {
    console.error('Error sending poll response:', error);
    throw error;
  }
}

export { sendFeedback, sendEarlyAccessRequest, getEarlyAccessCount, sendWaitlistRequest, sendPollResponse };
