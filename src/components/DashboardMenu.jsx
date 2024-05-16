import { useState } from 'react';
import DashboardCard from './profile/DashboardCards';

const DashboardMenu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const handleMenuItemClick = () => {
      // Close the dropdown when a menu item is clicked
      setDropdownOpen(false);
    };
    const [selectedCard, setSelectedCard] = useState('Saved Items');

    const handleCardClick = (cardTitle) => {
        setSelectedCard(cardTitle);
    };
    return (
      <section title="Quick Links (Shortcuts)" className="mt-8">
        <div className="md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Menu
            <span className={`ml-2 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
          {dropdownOpen && (
        <div className="flex flex-col gap-6 mt-2">
            <DashboardCard
            title="Saved Items"
            iconPath="/icons/heart.svg"
            href="/my_life"
            onClick={() => handleCardClick('Saved Items')}
            />
            <DashboardCard
            title="Jobs Alerts - coming soon!"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Alerts')}
            />
            <DashboardCard
            title="Jobs Applied For"
            iconPath="/icons/folder.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Applied For')}
            />
            <DashboardCard
            title="My Profile"
            iconPath="/icons/users.svg"
            href="/my_life"
            onClick={() => handleCardClick('My Profile')}
            />
      </div>

          )}
        </div>
        <div className="hidden md:flex gap-6">
          <DashboardCard
            title="Saved Items"
            iconPath="/icons/heart.svg"
            href="/my_life"
            onClick={() => handleCardClick('Saved Items')}
          />
          <DashboardCard
            title="Jobs Alerts - coming soon!"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Alerts')}
          />
          <DashboardCard
            title="Jobs Applied For"
            iconPath="/icons/folder.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Applied For')}
          />
          <DashboardCard
            title="My Profile"
            iconPath="/icons/users.svg"
            href="/my_life"
            onClick={() => handleCardClick('My Profile')}
          />
        </div>

      </section>
    );
  };
  


export default DashboardMenu;
