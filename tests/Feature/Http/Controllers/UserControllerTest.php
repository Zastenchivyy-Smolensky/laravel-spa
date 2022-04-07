<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use DatabaseTransactions;
    public function setUp():void
    {
        parent::setUp();
    }
    public function testIndex()
    {
        // `users` テーブルにデータを作成 (Tips参照)
        factory(User::class)->create([
            'email' => 'user1@example.com',
        ]);

        // GET リクエスト
        $response = $this->get(route('users.index'));

        // レスポンスの検証
        $response->assertOk()  # ステータスコードが 200
            ->assertJsonCount(1) # レスポンスの配列の件数が1件
            ->assertJsonFragment([ # レスポンスJSON に以下の値を含む
                'email' => 'user1@example.com',
            ]);
    }
    

}
