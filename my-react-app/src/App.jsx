import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import newsData from './data/news.json'
import './App.css'

const NAV_ITEMS = [
  { label: 'TRANG CHỦ', path: '/' },
  { label: 'GIỚI THIỆU', path: '/' },
  { label: 'TIN TỨC - SỰ KIỆN', path: '/' },
  { label: 'TỔ CHUYÊN MÔN', path: '/' },
  { label: 'HỌC SINH', path: '/' },
  { label: 'VĂN BẢN', path: '/' },
  { label: 'THƯ VIỆN ẢNH', path: '/' },
  { label: 'LIÊN HỆ', path: '/' },
]

const SLIDES = newsData.slice(0, 3)

const HIGHLIGHT_NEWS = newsData.filter((item) => item.badge).slice(0, 2)

const RIGHT_WIDGETS = [
  {
    type: 'video',
    title: 'Hoạt động trải nghiệm, sáng tạo',
    urls: [
      'https://i.postimg.cc/YqG31Bdx/6006de51-33e1-4c94-97af-e0390bfda15e.jpg',
      'http://thpthoangquocviet.edu.vn/upload/24288/20190403/IMG_918956.JPG',
      'https://i.postimg.cc/0jmC1pMp/a8757d9b-5f94-4bbc-9edf-3c60203a6ea4.jpg',
    ],
  },
  {
    type: 'banner',
    title: 'Đặt banner quảng cáo',
    urls: ['https://test.img', 'https://test.img'],
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
    key: 'TIN_TUC',
  },
  {
    title: 'HOẠT ĐỘNG CHUYÊN MÔN',
    colorClass: 'category-block--blue',
    key: 'CHUYEN_MON',
  },
  {
    title: 'CÔNG TÁC HỌC SINH',
    colorClass: 'category-block--orange',
    key: 'CONG_TAC_HS',
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

function ImageSlider({ urls, altPrefix }) {
  const [current, setCurrent] = useState(0)
  const hasMany = urls.length > 1

  useEffect(() => {
    if (!hasMany) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % urls.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [urls.length, hasMany])

  if (!urls.length) {
    return null
  }

  const goTo = (index) => {
    setCurrent(index)
  }

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % urls.length)
  }

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + urls.length) % urls.length)
  }

  return (
    <div className="right-widget__slider">
      <div className="right-widget__slider-frame">
        <img
          src={urls[current]}
          alt={`${altPrefix} ${current + 1}`}
          className="right-widget__slider-image"
        />
        {hasMany && (
          <>
            <button
              type="button"
              className="right-widget__slider-arrow right-widget__slider-arrow--prev"
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="right-widget__slider-arrow right-widget__slider-arrow--next"
              onClick={goNext}
            >
              ›
            </button>
          </>
        )}
      </div>
      {hasMany && (
        <div className="right-widget__slider-dots">
          {urls.map((url, index) => (
            <button
              key={url + index}
              type="button"
              className={`right-widget__slider-dot ${
                index === current ? 'right-widget__slider-dot--active' : ''
              }`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="layout-two-columns">
        <div className="layout-two-columns__left">
          <div className="hero-news">
            <div className="hero-news__slideshow">
              <img
                src={SLIDES[0]?.url || 'https://test.img'}
                alt={SLIDES[0]?.title || 'Tin tức nổi bật'}
                className="hero-news__image"
              />
              <div className="hero-news__dots">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`hero-news__dot ${
                      index === 0 ? 'hero-news__dot--active' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="hero-news__list">
              {SLIDES.map((slide) => (
                <article key={slide.id} className="hero-news__item">
                  <h3>
                    <Link to={`/news/${slide.id}`}>{slide.title}</Link>
                  </h3>
                  <p>{slide.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="highlight-news">
            {HIGHLIGHT_NEWS.map((news) => (
              <article key={news.id} className="highlight-news__item">
                {news.badge ? (
                  <div className="highlight-news__category">{news.badge}</div>
                ) : null}
                <h3 className="highlight-news__title">
                  <Link to={`/news/${news.id}`}>{news.title}</Link>
                </h3>
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
                {widget.urls && widget.urls.length > 0 ? (
                  <ImageSlider
                    urls={widget.urls}
                    altPrefix={widget.title}
                  />
                ) : widget.type === 'video' ? (
                  <div className="right-widget__thumbnail">
                    <img src="https://test.img" alt={widget.title} />
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
        {CATEGORY_BLOCKS.map((block) => {
          const articles = newsData
            .filter((item) => item.categoryKey === block.key)
            .slice(0, 3)

          return (
            <div
              key={block.title}
              className={`category-block ${block.colorClass}`}
            >
              <div className="category-block__header">
                <h2>{block.title}</h2>
              </div>
              <div className="category-block__content">
                <div className="category-block__thumb">
                  <img src="https://test.img" alt={block.title} />
                </div>
                <ul className="category-block__list">
                  {articles.map((article) => (
                    <li key={article.id}>
                      <Link to={`/news/${article.id}`}>{article.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
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
          <img src="https://test.img" alt="Logo trường THPT Hoàng Quốc Việt" />
          <p>
            Tích cực, tự giác, chủ động, sáng tạo và năng lực tự học.
          </p>
        </div>
      </section>
    </>
  )
}

function NewsDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const article = newsData.find((item) => item.id === id)

  if (!article) {
    return (
      <div className="news-detail news-detail--not-found">
        <p>Không tìm thấy bài viết.</p>
        <button type="button" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    )
  }

  const rawBlocks = Array.isArray(article.content) ? article.content : []
  const blocks = rawBlocks.map((block) =>
    typeof block === 'string' ? { type: 'text', value: block } : block,
  )

  const firstImageIndex = blocks.findIndex((b) => b.type === 'image')
  const coverImage = firstImageIndex >= 0 ? blocks[firstImageIndex] : null
  const bodyBlocks =
    firstImageIndex >= 0
      ? blocks.filter((_, index) => index !== firstImageIndex)
      : blocks

  return (
    <article className="news-detail">
      <div className="news-detail__breadcrumb">
        <Link to="/">Trang chủ</Link>
        <span>/</span>
        <span>Tin tức</span>
      </div>

      <h1 className="news-detail__title">{article.title}</h1>
      <div className="news-detail__meta">
        <span>{article.date}</span>
        <span>{article.category}</span>
      </div>

      <div className="news-detail__content">
        {coverImage && coverImage.src && (
          <div className="news-detail__cover">
            <img src={coverImage.src} alt={coverImage.caption || article.title} />
            {coverImage.caption ? (
              <p className="news-detail__caption">{coverImage.caption}</p>
            ) : null}
          </div>
        )}

        {bodyBlocks.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="news-detail__heading">
                {block.value}
              </h2>
            )
          }

          if (block.type === 'image' && block.src) {
            return (
              <figure key={index} className="news-detail__image-block">
                <img src={block.src} alt={block.caption || article.title} />
                {block.caption ? (
                  <figcaption>{block.caption}</figcaption>
                ) : null}
              </figure>
            )
          }

          return (
            <p key={index}>
              {block.value}
            </p>
          )
        })}

        {article.url && (
          <p className="news-detail__source">
            Nguồn:&nbsp;
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.url}
            </a>
          </p>
        )}
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="school-page">
      <header className="school-header">
        <div className="school-header__top">
          <div className="school-header__logo-area">
            <div className="school-header__logo-circle">
              <img
                src="https://i.postimg.cc/rwYRgDzS/bb88f097-1d32-4663-ab05-312a32d2ed12.jpg"
                alt="Logo Trường THPT Hoàng Quốc Việt"
                className="school-header__logo-img"
              />
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
              src="http://thpthoangquocviet.edu.vn/upload/24288/20190328/bannerN3.jpg"
              alt="Banner trường THPT Hoàng Quốc Việt"
            />
          </div>
        </div>
        <nav className="school-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="school-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
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
