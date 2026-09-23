import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import GalleryTemplate from '../components/templates/GalleryTemplate';

export default function Gallery() {
  return <GalleryTemplate items={GALLERY_ITEMS} categories={GALLERY_CATEGORIES} />;
}
