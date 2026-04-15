# 👥 KeenKeeper

KeenKeeper is a modern friendship management web application that helps users maintain meaningful relationships by tracking interactions and contact goals.

---

## 🚀 Description

KeenKeeper allows users to keep track of their friends, monitor how long it has been since they last connected, and take quick actions like calling, texting, or video chatting. It also provides a timeline of interactions and analytics to better understand communication habits.

---

## 🛠️ Technologies Used

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (for analytics chart)
- **Lucide React / React Icons**
- **LocalStorage** (for timeline data)

---

## ✨ Key Features

### 🏠 Home Page
- Display all friends from JSON data
- Beautiful card layout with:
  - Profile image
  - Name
  - Days since last contact
  - Tags
  - Status (Overdue / On-track / Almost due)
- Summary cards:
  - Total Friends
  - On Track
  - Need Attention
  - Monthly Interactions

---

### 👤 Friend Details Page
- Full profile view:
  - Image, name, email, bio
  - Tags & status
- Stats:
  - Days since contact
  - Goal
  - Next due date
- Action buttons:
  - Snooze
  - Archive
  - Delete
- **Quick Check-In (Important Feature):**
  - Call
  - Text
  - Video
- Clicking these adds a timeline entry + shows toast notification

---

### 📜 Timeline Page
- Shows all interaction history
- Each entry includes:
  - Icon (Call/Text/Video)
  - Title
  - Date
- **Filter system:**
  - All
  - Call
  - Text
  - Video

---

### 📊 Stats Page (Analytics)
- Pie chart showing:
  - Call count
  - Text count
  - Video count
- Built using Recharts

---

### ⚡ Other Features
- Responsive design (Mobile, Tablet, Desktop)
- Custom dropdown filter UI
- Loading spinner while fetching data
- Toast notifications
- 404 Not Found page
- Clean UI inspired by modern dashboard design

---

