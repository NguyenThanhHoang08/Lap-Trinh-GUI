import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [filters, setFilters] = useState({
    type: [],
    time: [30, 50],
    rating: []
  });

  // Giả lập danh sách filter để render tự động (Scalable)
  const filterOptions = {
    type: ["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"],
    rating: [5, 4, 3, 2, 1]
  };

  return (
    <div className="search-page-container">
      <div className="search-page-content">
        {/* SIDEBAR FILTERS */}
        <aside className="filters-sidebar">
          <div className="filter-header">
            <span className="icon">☰</span> FILTERS
          </div>

          {/* Type Filter */}
          <section className="filter-group">
            <h4 className="group-title">Type</h4>
            <div className="checkbox-grid">
              {filterOptions.type.map(item => (
                <label key={item} className="checkbox-item">
                  <input type="checkbox" /> {item}
                </label>
              ))}
            </div>
          </section>

          {/* Time Filter */}
          <section className="filter-group">
            <h4 className="group-title">Time</h4>
            <div className="range-slider">
              <div className="time-labels">
                <span>30 minutes</span>
                <span>50 minutes</span>
              </div>
              <input type="range" className="slider" min="10" max="120" />
            </div>
          </section>

          {/* Rating Filter */}
          <section className="filter-group">
            <h4 className="group-title">Rating</h4>
            {filterOptions.rating.map(star => (
              <label key={star} className="checkbox-item">
                <input type="checkbox" />
                <span className="stars">{"★".repeat(star)}{"☆".repeat(5-star)}</span>
              </label>
            ))}
          </section>

          <button className="apply-btn">Apply</button>
        </aside>

        {/* MAIN RESULTS AREA */}
        <main className="results-area">
          <h2 className="search-query-title">Sorry, no results were found for "cakescascsa"</h2>
          
          <div className="empty-state">
            <div className="empty-icon">
              <div className="box-illustration">
                <div className="magnifier">✖</div>
              </div>
            </div>
            <p>We have all your Independence Day sweets covered.</p>
            
            <div className="suggestion-tags">
              <span className="tag tag-pink">Sweet Cake</span>
              <span className="tag tag-purple">Black Cake</span>
              <span className="tag tag-pink">Pozole Verde</span>
              <span className="tag tag-blue">Healthy food</span>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};

export default SearchPage;