<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const activeCategory = ref('Music')
const categories = ['Music', 'Sports', 'Arts', 'Tech']

const upcomingEvents = [
  {
    day: 12,
    month: 'OCT',
    title: 'Jazz Night Live',
    venue: 'Blue Note Club',
    time: '8:00 PM • FRIDAY',
    price: '$45',
  },
  {
    day: 15,
    month: 'OCT',
    title: 'Tech Innovators Su...',
    venue: 'Convention Center',
    time: '9:00 AM • MONDAY',
    price: '$120',
  },
  {
    day: 20,
    month: 'OCT',
    title: 'Modern Art Gallery',
    venue: 'District Museum',
    time: '10:00 AM • SATURDAY',
    price: 'FREE',
  },
]
</script>

<template>
  <div class="app">
    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <wcds-avatar name="User" size="sm" src="https://i.pravatar.cc/200?img=9" />
          <div class="header-text">
            <span class="label">DISCOVER</span>
            <h1>Events</h1>
          </div>
        </div>

        <wcds-button variant="outlined" color-scheme="neutral" size="sm">
          <wcds-icon icon="menu" />
        </wcds-button>
      </header>

      <!-- Search -->
      <wcds-input
        :value="searchQuery"
        placeholder="Find concerts, sports..."
        @wcds-on-input="(event) => (searchQuery = event.detail.value)"
      />
      <!-- Categories -->
      <div class="categories">
        <wcds-button
          v-for="category in categories"
          :key="category"
          :variant="activeCategory === category ? 'solid' : 'ghost'"
          color-scheme="primary"
          size="sm"
          @wcds-on-click="activeCategory = category"
        >
          {{ category }}
        </wcds-button>
      </div>

      <!-- Featured Event -->
      <div class="featured-event">
        <div class="featured-image">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop"
            alt="Concert"
          />
          <wcds-badge class="featured-badge" variant="success">FEATURED EVENT</wcds-badge>
          <div class="featured-content">
            <h2 class="featured-title">Neon Music Festival 2024</h2>
            <p class="event-meta"><wcds-icon icon="location" /> Oct 25-27 • Stadium Arena</p>
            <wcds-button variant="solid" color-scheme="primary" size="md">
              Get Tickets →
            </wcds-button>
          </div>
        </div>
      </div>

      <!-- Upcoming Events -->
      <section class="upcoming">
        <div class="section-header">
          <h3>Upcoming Events</h3>

          <a href="#" class="see-all-container">
            <span>See All</span>
            <wcds-icon icon="arrow-right" />
          </a>
        </div>

        <div class="event-list">
          <wcds-card v-for="event in upcomingEvents" :key="event.title">
            <div slot="header" class="event-date">
              <span class="day">{{ event.day }}</span>
              <span class="month">{{ event.month }}</span>
            </div>
            <div class="event-info">
              <strong>{{ event.title }}</strong>
              <span class="venue"> <wcds-icon icon="location" /> {{ event.venue }} </span>
              <span class="time">{{ event.time }}</span>
            </div>
            <wcds-badge slot="footer" :variant="event.price === 'FREE' ? 'success' : 'info'">
              {{ event.price }}
            </wcds-badge>
          </wcds-card>
        </div>
      </section>
    </main>

    <!-- Bottom Nav -->
    <nav class="bottom-nav">
      <button class="nav-item active">
        <wcds-icon icon="search" />
        <span>EXPLORE</span>
      </button>
      <button class="nav-item">
        <wcds-icon icon="check" />
        <span>TICKETS</span>
      </button>
      <button class="nav-item">
        <wcds-icon icon="menu" />
        <span>PROFILE</span>
      </button>
    </nav>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  background: var(--wcds-color-neutral-100);
  color: var(--wcds-color-neutral-900);
  min-height: 100vh;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--wcds-spacing-md);
  padding-bottom: var(--wcds-spacing-xl);
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: var(--wcds-spacing-md);
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--wcds-spacing-sm);
}

.header-text .label {
  font-size: var(--wcds-font-size-xs);
  color: var(--wcds-text-color-default);
  font-weight: var(--wcds-font-weight-semibold);
  letter-spacing: var(--wcds-font-letter-spacing-tight);
}

.header-text h1 {
  font-size: var(--wcds-font-size-2xl);
  font-weight: var(--wcds-font-weight-semibold);
  color: var(--wcds-text-color-default);
}

/* Search */
.search-input {
  width: 100%;
}

/* Categories */
.categories {
  gap: var(--wcds-spacing-xs);
  display: flex;
}

.categories wcds-button {
  flex-shrink: 0;
}

/* Featured Event */
.featured-image {
  border-radius: var(--wcds-border-radius-default);
  position: relative;
  overflow: hidden;
}

.featured-badge {
  position: absolute;
  top: var(--wcds-spacing-sm);
  right: var(--wcds-spacing-sm);
}

.featured-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.featured-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--wcds-spacing-lg);
  padding-top: var(--wcds-spacing-xl);
  background: linear-gradient(transparent, var(--wcds-color-neutral-900));
  backdrop-filter: blur(4px);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 30%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 30%);
  display: flex;
  flex-direction: column;
  gap: var(--wcds-spacing-md);
}

.featured-content h2 {
  font-size: var(--wcds-font-size-3xl);
  font-weight: var(--wcds-font-weight-semibold);
  color: var(--wcds-color-neutral-200);
}

.event-meta {
  display: flex;
  align-items: center;
  gap: var(--wcds-spacing-xs);
  font-size: var(--wcds-font-size-sm);
  color: var(--wcds-color-neutral-500);
}

.event-meta wcds-icon {
  --wcds-icon-size: 1rem;
}

/* Upcoming Events */
.upcoming {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--wcds-spacing-md);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: var(--wcds-font-size-xl);
  font-weight: var(--wcds-font-weight-semibold);
}

.see-all-container {
  display: flex;
  align-items: center;
  gap: var(--wcds-spacing-xs);
  font-size: var(--wcds-font-size-sm);
}

.see-all-container a {
  color: var(--wcds-color-neutral-900);
  text-decoration: none;
}

.see-all-container wcds-icon {
  --wcds-icon-size: 1rem;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: var(--wcds-spacing-sm);
}

.event-list wcds-card {
  --wcds-card-bg-color: var(--wcds-color-neutral-900);
  --wcds-card-border-color: var(--wcds-color-neutral-800);
  --wcds-card-shadow: var(--wcds-card-shadow-elevated);
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 45px;
}

.event-date .day {
  font-size: var(--wcds-font-size-2xl);
  font-weight: var(--wcds-font-weight-semibold);
  color: var(--wcds-color-primary-600);
}

.event-date .month {
  font-size: var(--wcds-font-size-xs);
  color: var(--wcds-color-secondary-700);
  font-weight: var(--wcds-font-weight-semibold);
}

.event-info {
  display: flex;
  flex-direction: column;
  gap: var(--wcds-spacing-xs);
  flex: 1;
  color: var(--wcds-color-neutral-200);
}

.event-info strong {
  font-size: var(--wcds-font-size-lg);
}

.event-info .venue {
  display: flex;
  align-items: center;
  gap: var(--wcds-spacing-xs);
  font-size: var(--wcds-font-size-sm);
  color: var(--wcds-color-neutral-500);
}

.event-info .venue wcds-icon {
  --wcds-icon-size: var(--wcds-font-size-sm);
  --wcds-icon-color: var(--wcds-color-neutral-500);
}

.event-info .time {
  font-size: var(--wcds-font-size-xs);
  color: var(--wcds-color-neutral-500);
}

/* Bottom Nav */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: var(--wcds-color-neutral-900);
  padding: var(--wcds-spacing-sm) var(--wcds-spacing-md);
  border-top: 1px solid var(--wcds-color-neutral-800);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--wcds-spacing-xs);
  background: none;
  border: none;
  color: var(--wcds-color-neutral-500);
  cursor: pointer;
  padding: var(--wcds-spacing-xs);
}

.nav-item.active {
  color: var(--wcds-color-primary-500);
}

.nav-item span {
  font-size: var(--wcds-font-size-xs);
  font-weight: var(--wcds-font-weight-semibold);
}
</style>
