import React from 'react';

export const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const GallerySkeleton = () => (
  <div className="main py-10">
    <div className="heading-div flex flex-col items-center">
      <Skeleton className="w-32 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="mt-10 p-4">
      <Skeleton className="w-full h-64 rounded-xl" />
    </div>
  </div>
);

export const AboutSkeleton = () => (
  <div className="main py-10">
    <div className="heading-div flex flex-col items-center mb-10">
      <Skeleton className="w-32 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
      <Skeleton className="w-full h-96 rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="w-48 h-8" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <div className="grid grid-cols-2 gap-6 mt-8">
          <Skeleton className="h-32 rounded-lg" />
          <Skeleton className="h-32 rounded-lg" />
          <Skeleton className="h-32 rounded-lg" />
          <Skeleton className="h-32 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

export const ProductSkeleton = () => (
  <div className="main py-10">
    <div className="heading-div flex flex-col">
      <Skeleton className="w-32 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 mt-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-2xl overflow-hidden shadow-md">
          <Skeleton className="w-full h-72" />
          <div className="p-5 space-y-3">
            <Skeleton className="w-32 h-6" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TestemonialSkeleton = () => (
  <div className="py-10">
    <div className="heading-div flex flex-col items-center mb-10">
      <Skeleton className="w-40 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-64 rounded-xl" />
      ))}
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="main py-10">
    <div className="heading-div flex flex-col items-center mb-10">
      <Skeleton className="w-32 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
      <Skeleton className="h-96 rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="w-full h-32 rounded-lg" />
        <Skeleton className="w-32 h-12 rounded-lg" />
      </div>
    </div>
  </div>
);

export const QueriesSkeleton = () => (
  <div id="queries" className="py-10">
    <div className="heading-div flex flex-col items-center mb-10">
      <Skeleton className="w-32 h-10 mb-2" />
      <Skeleton className="w-20 h-2" />
    </div>
    <div className="max-w-2xl mx-auto px-4 space-y-4">
      <Skeleton className="w-full h-12 rounded-lg" />
      <Skeleton className="w-full h-12 rounded-lg" />
      <Skeleton className="w-full h-12 rounded-lg" />
      <Skeleton className="w-full h-32 rounded-lg" />
      <Skeleton className="w-32 h-12 rounded-lg" />
    </div>
  </div>
);

export const FooterSkeleton = () => (
  <div className="bg-gray-900 py-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="w-24 h-6 rounded" />
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-3/4 h-4 rounded" />
          <Skeleton className="w-full h-4 rounded" />
        </div>
      ))}
    </div>
    <div className="mt-10 pt-6 border-t border-gray-700 text-center">
      <Skeleton className="w-64 h-4 mx-auto rounded" />
    </div>
  </div>
);
