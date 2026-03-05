import './App.css'

const NAV_ITEMS = [
  'TRANG CHỦ',
  'GIỚI THIỆU',
  'TIN TỨC - SỰ KIỆN',
  'TỔ CHUYÊN MÔN',
  'HỌC SINH',
  'VĂN BẢN',
  'THƯ VIỆN ẢNH',
  'LIÊN HỆ',
]

const SLIDES = [
  {
    title:
      'Chào mừng kỷ niệm 60 năm thành lập Trường THPT Hoàng Quốc Việt (1965 - 2025)',
    description:
      'Các thế hệ thầy và trò nhà trường thi đua lập thành tích chào mừng ngày hội truyền thống.',
  },
  {
    title: 'Hoạt động trải nghiệm sáng tạo của học sinh',
    description:
      'Nhiều hoạt động ngoại khóa, rèn luyện kỹ năng sống, giáo dục giá trị sống được tổ chức thường xuyên.',
  },
  {
    title: 'Phong trào thi đua dạy tốt - học tốt',
    description:
      'Giáo viên nhà trường tích cực đổi mới phương pháp, nâng cao chất lượng dạy học.',
  },
]

const HIGHLIGHT_NEWS = [
  {
    category: 'TIN NỔI BẬT',
    title:
      'THPT Hoàng Quốc Việt đạt thành tích cao trong kỳ thi tốt nghiệp THPT',
    date: '03/03/2026',
  },
  {
    category: 'THÔNG BÁO',
    title:
      'Kế hoạch tuyển sinh vào lớp 10 năm học 2026 - 2027',
    date: '28/02/2026',
  },
]

const RIGHT_WIDGETS = [
  {
    type: 'video',
    title: 'Hoạt động trải nghiệm: Hùng Cửu Sáng tạo',
  },
  {
    type: 'banner',
    title: 'Đặt banner quảng cáo',
  },
]

const VISION_ITEMS = [
  {
    title: 'TẦM NHÌN',
    text: 'Xây dựng Trường THPT Hoàng Quốc Việt trở thành trường chất lượng cao của tỉnh Quảng Ninh.',
  },
  {
    title: 'SỨ MỆNH',
    text: 'Đào tạo thế hệ học sinh tích cực, tự giác, chủ động, sáng tạo và năng lực tự học suốt đời.',
  },
  {
    title: 'GIÁ TRỊ CỐT LÕI',
    text: 'Kỷ cương - Trách nhiệm - Thân thiện - Sáng tạo.',
  },
]

const CATEGORY_BLOCKS = [
  {
    title: 'TIN TỨC',
    colorClass: 'category-block--green',
    articles: [
      'Hoạt động chào mừng Ngày Nhà giáo Việt Nam 20/11',
      'Lễ khai giảng năm học 2025 - 2026',
      'Cuộc thi nghiên cứu khoa học kỹ thuật cấp trường',
    ],
  },
  {
    title: 'HOẠT ĐỘNG CHUYÊN MÔN',
    colorClass: 'category-block--blue',
    articles: [
      'Sinh hoạt chuyên đề tổ Toán - Tin',
      'Hội giảng giáo viên giỏi cấp trường',
      'Tập huấn đổi mới kiểm tra đánh giá theo hướng phát triển năng lực.',
    ],
  },
  {
    title: 'CÔNG TÁC HỌC SINH',
    colorClass: 'category-block--orange',
    articles: [
      'Tuyên dương học sinh đạt giải HSG cấp tỉnh',
      'Hoạt động Đoàn - Hội và phong trào thanh niên',
      'Công tác tư vấn hướng nghiệp cho học sinh khối 12.',
    ],
  },
]

const QUICK_LINKS = [
  'Tra cứu điểm thi',
  'Thời khóa biểu',
  'Văn bản pháp quy',
  'Cổng thông tin Sở GD&ĐT',
]

const FOOTER_LINKS = [
  'Trang chủ',
  'Giới thiệu',
  'Sơ đồ trang',
  'Liên hệ',
]

function App() {
  return (
    <div className="school-page">
      <header className="school-header">
        <div className="school-header__top">
          <div className="school-header__logo-area">
            <div className="school-header__logo-circle">
              <span className="school-header__logo-text">HV</span>
            </div>
            <div className="school-header__titles">
              <div className="school-header__sub-title">
                SỞ GIÁO DỤC VÀ ĐÀO TẠO QUẢNG NINH
              </div>
              <div className="school-header__main-title">
                TRƯỜNG THPT HOÀNG QUỐC VIỆT
              </div>
              <div className="school-header__slogan">
                Tích cực, tự giác, chủ động, sáng tạo và năng lực tự học.
              </div>
            </div>
          </div>
          <div className="school-header__banner">
            <img
              src="https://via.placeholder.com/520x90?text=Banner+Truong+THPT+Hoang+Quoc+Viet"
              alt="Banner trường THPT Hoàng Quốc Việt"
            />
          </div>
        </div>
        <nav className="school-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="school-main">
        <section className="layout-two-columns">
          <div className="layout-two-columns__left">
            <div className="hero-news">
              <div className="hero-news__slideshow">
                <img
                  src="https://via.placeholder.com/520x260?text=Slide+Tin+tuc"
                  alt="Tin tức nổi bật"
                  className="hero-news__image"
                />
                <div className="hero-news__dots">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={slide.title}
                      className={`hero-news__dot ${
                        index === 0 ? 'hero-news__dot--active' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="hero-news__list">
                {SLIDES.map((slide) => (
                  <article key={slide.title} className="hero-news__item">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="highlight-news">
              {HIGHLIGHT_NEWS.map((news) => (
                <article key={news.title} className="highlight-news__item">
                  <div className="highlight-news__category">
                    {news.category}
                  </div>
                  <h3 className="highlight-news__title">{news.title}</h3>
                  <div className="highlight-news__meta">{news.date}</div>
                </article>
              ))}
            </div>
          </div>

          <aside className="layout-two-columns__right">
            {RIGHT_WIDGETS.map((widget) => (
              <div
                key={widget.title}
                className={`right-widget right-widget--${widget.type}`}
              >
                <div className="right-widget__header">
                  <span>{widget.title}</span>
                </div>
                <div className="right-widget__body">
                  {widget.type === 'video' ? (
                    <div className="right-widget__thumbnail">
                      <img
                        src="https://via.placeholder.com/320x180?text=Video"
                        alt={widget.title}
                      />
                    </div>
                  ) : (
                    <div className="right-widget__banner-placeholder">
                      Banner quảng cáo
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="quick-icons">
              <div className="quick-icons__item">
                <div className="quick-icons__icon">VB</div>
                <span>Văn bản</span>
              </div>
              <div className="quick-icons__item">
                <div className="quick-icons__icon">TKB</div>
                <span>Thời khóa biểu</span>
              </div>
              <div className="quick-icons__item">
                <div className="quick-icons__icon">DS</div>
                <span>Danh sách lớp</span>
              </div>
              <div className="quick-icons__item">
                <div className="quick-icons__icon">TV</div>
                <span>Thư viện ảnh</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="vision-section">
          <div className="vision-section__header">
            <span>TẦM NHÌN MỚI</span>
            <span>THÀNH CÔNG MỚI</span>
          </div>
          <div className="vision-section__content">
            {VISION_ITEMS.map((item) => (
              <div key={item.title} className="vision-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="category-section">
          {CATEGORY_BLOCKS.map((block) => (
            <div
              key={block.title}
              className={`category-block ${block.colorClass}`}
            >
              <div className="category-block__header">
                <h2>{block.title}</h2>
              </div>
              <div className="category-block__content">
                <div className="category-block__thumb">
                  <img
                    src="https://via.placeholder.com/260x160?text=Tin+tuc"
                    alt={block.title}
                  />
                </div>
                <ul className="category-block__list">
                  {block.articles.map((article) => (
                    <li key={article}>{article}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="quick-links-section">
          <div className="quick-links">
            <h2>TIỆN ÍCH</h2>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="school-badge">
            <img
              src="https://via.placeholder.com/320x320?text=Logo+THPT+Hoang+Quoc+Viet"
              alt="Logo trường THPT Hoàng Quốc Việt"
            />
            <p>
              Tích cực, tự giác, chủ động, sáng tạo và năng lực tự học.
            </p>
          </div>
        </section>
      </main>

      <footer className="school-footer">
        <div className="school-footer__content">
          <div className="school-footer__info">
            <div className="school-footer__name">
              Trường THPT Hoàng Quốc Việt
            </div>
            <div className="school-footer__contact">
              Địa chỉ: Thành phố Hạ Long, tỉnh Quảng Ninh. Điện thoại:
              (0xx) xxx xxxx. Email: c3hoangquocviet@quangninh.edu.vn
            </div>
          </div>
          <div className="school-footer__links">
            {FOOTER_LINKS.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="school-footer__bottom">
          &copy; {new Date().getFullYear()} Trường THPT Hoàng Quốc Việt. Bản
          quyền thuộc về nhà trường.
        </div>
      </footer>
    </div>
  )
}

export default App
