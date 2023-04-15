<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 09-06-2022
 * Time: 03:34 PM
 */

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait UploadTrait
{
    public function uploadOne(UploadedFile $uploadedFile, $folder = null, $disk = 'public', $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25); // merchant_images_1664003600

        $file = $uploadedFile->storeAs($folder, $name.'.'.$uploadedFile->getClientOriginalExtension(), $disk);
        /*
            /uploads/merchant_images/
            merchant_images_1664003717.jpg
            public
        */

        return $file;
    }
}
/*
Illuminate\Http\UploadedFile Object
(
    [test:Symfony\Component\HttpFoundation\File\UploadedFile:private] => 
    [originalName:Symfony\Component\HttpFoundation\File\UploadedFile:private] => 3b8ad2c7b1be2caf24321c852103598a.jpg
    [mimeType:Symfony\Component\HttpFoundation\File\UploadedFile:private] => image/jpeg
    [error:Symfony\Component\HttpFoundation\File\UploadedFile:private] => 0
    [hashName:protected] => 
    [pathName:SplFileInfo:private] => D:\xampp_php_8_0_14\tmp\php372B.tmp
    [fileName:SplFileInfo:private] => php372B.tmp
)

/uploads/merchant_images/

public

merchant_images_1664003600
*/