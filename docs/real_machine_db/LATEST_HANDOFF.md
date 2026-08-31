# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までLATEST_HANDOFF基準で79件収録済み。
- 今回 `嗚呼!我ら日本松柔道部` と `空手バカ一代` を新規登録した。
- **LATEST_HANDOFF基準の収録数は81件。**
- **2007年1月の前回引継ぎ候補は処理完了。次回は2007年2月へ進む。**

## 今回追加

### `machines/2007-01_aa-warera-nihonmatsu-judobu.md`
- 嗚呼!我ら日本松柔道部 / WIN NET TECHNOLOGY / 2007年1月扱い。
- 型式名ニッポンマツジュウドウブ。
- 6種ボーナス+完走型RT。
- ボーナス合成: 設定1 1/274.2 → 設定6 1/188.9。
- RT「一本勝負」は約+0.9枚/G。赤帯後777G、その他5種はCZ経由で200G。
- 赤帯/黒帯純増約312枚、茶帯/緑帯約180枚、黄帯/白帯約36枚。
- 機械割は当時HAZUSE 95.4〜107.1%と後年5号機クロニクル93.5〜106.5%が競合するためCONFLICTとして双方保持。
- 50枚ベースは表記揺れ・型式名・メーカー名・1000円/コイン持ち等で再探索したが未確定。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/RT引継ぎ/朝一/ガックンまで再探索したが固有挙動を確定できずPARTIAL。有利区間は非該当。

### `machines/2007-01_karate-baka-ichidai.md`
- 空手バカ一代 / ゴールドオリンピア / 2007年1月。
- ボーナス+RT機。空手BIG/通常BIG/CB/REG。
- ボーナス合算: 設定1 1/341.3 → 設定6 1/269.7。
- 機械割: 96.6 / 98.5 / 100.9 / 102.3 / 104.1 / 105.7%。複数資料で一致。
- RT「百人組手」は約+0.5枚/G、10000G消化またはボーナス成立までの実質次回ボーナス型。
- 空手BIG約320枚、通常BIG約200枚、CB/REG約100枚。
- 天井非搭載を確認。
- 50枚ベースは再探索後も未確定。
- resetBehaviorは設定変更/据え置き/電源断/百人組手引継ぎ/朝一/ガックンまで探索したが固有変更挙動を確定できずPARTIAL。有利区間は非該当。
- 5号機クロニクルの同機記述には導入月・RT仕様の不整合があるため、機械割照合以外には採用していない。

## 2007年1月監査結果

前回引継ぎで未処理として残されていた以下をすべて処理済み。
- マリーンギャング
- 嗚呼!我ら日本松柔道部
- 空手バカ一代

直前までに処理済みだった主な1月機:
- PS行くぜ大工の源さんVD
- サクスロ
- ビジトジ
- バトルリーガーX
- アイムジャグラーEX
- 新日本プロレスまでもがパチスロ機
- 南国美人 / 南国美人30
- ぐるぐる爆侍
- ジャンジャン年中猛特訓

現時点のメーカー別一覧・P-WORLD・当時資料照合では、前引継ぎ候補以外の明確な2007年1月未処理機は追加確定していない。境界機は次回2月開始時にも再監査する。

## resetBehavior 方針継続

- 新規機種はv0.7に従い性能コアとresetBehaviorを同時探索する。
- 5号機初期機でも最初の検索だけでUNVERIFIEDにしない。
- 設定変更、リセット、朝一、据え置き、電源OFF→ON、RT引継ぎ、天井、ガックンへ検索語を分岐する。
- 高信頼で確認できないものだけUNVERIFIED。
- 有利区間は制度導入前の5号機では非該当。

## 次回再開地点

**2007年2月へ進み、先頭候補 `プレイボーイ` / `プレイボーイ-30`（2007-02-04納品予定資料あり）から監査・収集する。25Φ/30Φが別型式・別機種扱いなら独立レコード化する。その後、2007年2月の全機種候補を導入順に漏れ監査し、新規機種は必ず性能コア+resetBehaviorを同時収集する。**

### 次回優先検索

- プレイボーイ / プレイボーイ-30
- 型式名、メーカー、25Φ/30Φ差
- 設定別BB/RB/合算、機械割、50枚ベース、獲得枚数
- RT等の付加機能
- 設定変更/据え置き/電源OFF→ON/朝一/ガックン
- 発表日ではなく納品/導入時期を優先

## 今回の主要資料

### 嗚呼!我ら日本松柔道部
- グリーンべると — https://web-greenbelt.jp/00004919/
- HAZUSE基本 — https://hazuse.com/i/data/nihonmatujyudoubu/top.htm
- HAZUSEボーナス — https://hazuse.com/i/data/nihonmatujyudoubu/bonus.htm
- HAZUSEボーナス詳細 — https://hazuse.com/i/data/nihonmatujyudoubu/bonus_shousai.htm
- HAZUSE RT — https://hazuse.com/i/data/nihonmatujyudoubu/rt.htm
- P-WORLD — https://www.p-world.co.jp/machine/database/4501
- 5号機クロニクル — https://5goki.com/winnet

### 空手バカ一代
- パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/03/a.php
- パチ7回顧/解析 — https://pachiseven.jp/articles/detail/11089
- pacnk設定判別 — https://pacnk.com/slot/tools/sh_karatebakaichidai.html
- P-WORLD — https://www.p-world.co.jp/machine/database/4548
- 5号機クロニクル — https://5goki.com/heiwa-olympia

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。