<?php
namespace App\Http\Controllers\Api\Front;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Http, Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request, Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator, DB, stdClass, Hash, File; // Illuminate\Support\Facades\Hash
use Mockery\Exception;
use App\Traits\UploadTrait;
use App\Models\User;
class HomeController extends ApiController{
    use UploadTrait;
    public $statusCode;
    public $status;
    public $message;
    public function __construct(){
        $this->status = TRUE;
        $this->statusCode = Response::HTTP_OK;
        $this->message = '';
        $this->currentDateTime = getCurrentDateTime();
        $this->objUser = new User();
    }
    public function users(Request $request){
        $pageNumber = trim($request->pageNumber);
        $pageNumber = ($pageNumber > 0) ? $pageNumber : 1;
        
        $limit = 2;
        
        $start = ($pageNumber - 1) * $limit;

        $searchArray = array();

        $totalUsers = $this->objUser->getUsers($searchArray, 1);

        $totalPages = ceil($totalUsers / $limit);

        $dataTable = $this->objUser->getUsers($searchArray, 0, $limit, $start);

        if( isset($dataTable) && !$dataTable->isEmpty() ){
        }
        else{
            $dataTable = array();
            $totalPages = null;
        }

        $responseData = array(
            "pageNumber" => (int)$pageNumber,
            "dataTable" => $dataTable,
            "totalPages" => $totalPages,
            "totalDataCount" => $totalUsers,
        );
        $responseDataData = array('status'=>$this->status,'message'=>$this->message,'statusCode'=>$this->statusCode,'data'=>$responseData);
        return response()->json($responseDataData,$this->statusCode);
    }
}