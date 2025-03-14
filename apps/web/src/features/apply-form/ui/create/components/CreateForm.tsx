'use client';

import { useRentalForm } from '../../../model';
import { Button } from '@workspace/ui/components/button';
import { Popover, PopoverContent, PopoverTrigger } from '@workspace/ui/components/popover';
import { Calendar } from '@workspace/ui/components/calendar';

export const CreateForm = () => {
  const {
    itemName,
    setItemName,
    selectedCategory,
    setSelectedCategory,
    rentalPeriod,
    setRentalPeriod,
    date,
    setDate,
    image,
    setImage,
    categories,
  } = useRentalForm();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-[590px]'>
      <section className='rounded-lg overflow-hidden border border-gray-300'>
        <header className='bg-haedal text-white p-3 text-center font-bold text-xl'>
          물품 대여 장부 작성
        </header>
        <div className='bg-white p-6 text-left space-y-6'>
          <div>
            <p className='text-gray-800 mb-1'>대여 물품의 이름을 작성해주세요.</p>
            <input
              type='text'
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className='w-1/2 border-b border-gray-300 p-2 focus:outline-none'
            />
          </div>
        </div>
      </section>

      <section className='rounded-lg overflow-hidden border border-gray-300 mt-6'>
        <div className='bg-white p-6 text-left space-y-6'>
          <div>
            <p className='text-gray-800 mb-2'>대여 물품의 종류를 선택해주세요.</p>
            <div className='flex space-x-2'>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'moon' : 'outline'}
                  className='h-[30px]'
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='rounded-lg overflow-hidden border border-gray-300 mt-6'>
        <div className='bg-white p-6 text-left space-y-6'>
          <div>
            <p className='text-gray-800 mb-2'>
              물품 대여 기간을 작성해주세요. 최대 대여 기간은{' '}
              <span className='font-bold'>일주일</span>입니다.
            </p>
            <div className='flex items-center space-x-2 mt-2'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant='outline' className='h-10 px-3'>
                    <img src='/apply-form/calendar-icon.png' className='w-5 h-5' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-2'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate || undefined);
                      if (selectedDate) {
                        const rentalPeriod = `${new Date().toLocaleDateString()} ~ ${new Date(
                          selectedDate.setDate(selectedDate.getDate())
                        ).toLocaleDateString()}`;
                        setRentalPeriod(rentalPeriod);
                      }
                    }}
                    fromDate={new Date()}
                    toDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                    modifiers={{
                      disabled: [
                        { before: new Date() },
                        { after: new Date(new Date().setDate(new Date().getDate() + 7)) },
                      ],
                    }}
                  />
                </PopoverContent>
              </Popover>
              <input
                type='text'
                value={rentalPeriod}
                readOnly
                placeholder='날짜 선택'
                className='p-2 w-full focus:outline-none'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='rounded-lg overflow-hidden border border-gray-300 mt-6'>
        <div className='bg-white p-6 text-left space-y-6'>
          <div>
            <p className='text-gray-800 mb-2'>대여 물품을 사진으로 찍어서 업로드해주세요.</p>
            <label
              htmlFor='image-upload'
              className='w-32 h-32 border border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden mx-auto'
            >
              {image ? (
                <img src={image} className='w-full h-full object-cover' />
              ) : (
                <div className='flex flex-col items-center'>
                  <img src='/apply-form/camera-icon.jpg' className='w-12 h-12 mb-2' />
                  <p className='text-gray-300 font-bold'>사진 추가</p>
                </div>
              )}
            </label>
            <input
              id='image-upload'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
