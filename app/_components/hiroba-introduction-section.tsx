import Image from "next/image";

export interface StaffMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export interface FacilityPhoto {
  src: string;
  alt: string;
  label: string;
}

export interface HirobaIntroductionProps {
  concept: {
    title: string;
    description: string;
  };
  staff: StaffMember[];
  facilityPhotos: FacilityPhoto[];
  mapImage: string;
}

export function HirobaIntroductionSection({
  concept,
  staff,
  facilityPhotos,
  mapImage,
}: HirobaIntroductionProps) {
  return (
    <section id="about" className="common-section hiroba-introduction">
      <div className="common-section__inner">
        {/* コンセプト */}
        <header className="section-header">
          <h2 className="section-header__title">{concept.title}</h2>
          <p className="section-header__subtitle">{concept.description}</p>
        </header>

        {/* スタッフ紹介 */}
        <div className="hiroba-introduction__staff">
          <h3 className="hiroba-introduction__subtitle">スタッフ紹介</h3>
          <div className="hiroba-introduction__staff-scroll">
            <div className="hiroba-introduction__staff-list">
              {staff.map((member, index) => (
                <div key={index} className="staff-card">
                  <div className="staff-card__image-wrapper">
                    <Image
                      src={member.image}
                      alt={`${member.name}の写真`}
                      width={200}
                      height={200}
                      className="staff-card__image"
                    />
                  </div>
                  <div className="staff-card__info">
                    <h4 className="staff-card__name">{member.name}</h4>
                    <p className="staff-card__role">{member.role}</p>
                    {member.description && (
                      <p className="staff-card__description">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 施設案内 */}
        <div className="hiroba-introduction__facility">
          <h3 className="hiroba-introduction__subtitle">施設案内</h3>
          <div className="hiroba-introduction__facility-scroll">
            <div className="hiroba-introduction__facility-list">
              {facilityPhotos.map((photo, index) => (
                <div key={index} className="facility-photo-item">
                  <div className="facility-photo-item__image-wrapper">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={200}
                      height={200}
                      className="facility-photo-item__image"
                    />
                  </div>
                  <p className="facility-photo-item__label">{photo.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 地図 */}
          <div className="hiroba-introduction__map-section">
            <h4 className="hiroba-introduction__map-title">
              はないろ 室内まっぷ
            </h4>
            <div className="hiroba-introduction__map-image-wrapper">
              <Image
                src={mapImage}
                alt="施設までの地図"
                width={600}
                height={600}
                className="hiroba-introduction__map-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
