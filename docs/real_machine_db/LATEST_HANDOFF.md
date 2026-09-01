# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは244件地点 / 2008-04-14 `デジスロV-30` まで完了。
- 2008-04-15〜19を旧業界史・メーカー別一覧・2008年度機種一覧で境界監査し、244件より前へ差し込む未処理5号機は今回確認できず。
- 今回、2008-04-20納品開始の `エイリアン2` を245件目、同日納品開始の `クイージ` を246件目として追加。
- 導入時系列の具体日前進地点は **2008-04-20**。
- resetBehavior遡及QAは直前handoffどおり `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 245. エイリアン2（アビリット）

- record: `docs/real_machine_db/machines/2008-04-20_alien2.md`
- commit: `46331831c28e12bc795b3b8668ff696397771bab`
- modelName: `ALIENS-X`
- releaseDate: `2008-04-20`
- releaseDateConfidence: `INDUSTRY_PRIMARY_EXACT_DELIVERY_DATE`
- systemType: ボーナス + CZ経由RT / 技術介入
- settingStructure: `1 / 2 / 5 / 6`
- coreStatus: `COMPLETE_CORE_WITH_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: `1/799.22 / 1/728.18 / 1/655.36 / 1/618.26`。
- MID: `1/799.22 / 1/728.18 / 1/655.36 / 1/618.26`。
- REG: `1/1638.40 / 1/1638.40 / 1/1489.45 / 1/1260.31`。
- ボーナス合成: `1/321.25 / 1/297.89 / 1/268.59 / 1/248.24`。
- 1000円ベース: `39.73 / 40.14 / 40.62 / 41.48G`。パチマガスロマガとK-Naviで同系列を確認。
- BIG約307〜310枚、MID約205枚、REG約77〜80枚。
- 全ボーナス後に最大30G CZ「デンジャーゾーン」。特殊リプレイで50Gまたは1000G RTへ。
- RT純増約 `+0.6枚/G`。50G契機を目押しで回避して1000G契機を待つ技術介入構造。

### 機械割CONFLICT

- 当時事前営業/フル攻略表記: `98 / 103 / 110 / 118%`。
- パチマガスロマガ実解析シミュレート: `95.67 / 98.82 / 104.15 / 108.79%`。
- 2008-05-01時点の旧業界議論/回顧にも「118%と営業されたが実質108%」との記録あり。
- 平均化せず `CONFLICT_PAYOUT_DEFINITION_AND_PRELAUNCH_CLAIM` として双方保持。

### v0.7 resetBehavior

- 通常時ゲーム数天井、リセット短縮天井、朝一専用モード、公開朝一恩恵/不利数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- CZ中または50G/1000G RT中の設定変更・据え置き・電源OFF→ON時の残G/内部RT状態、本機固有ガックン/初期出目等は、表記揺れ・型式名・メーカー名を含めメーカー発表系、当時業界、K-Navi、パチマガ、P-WORLD、当時攻略、旧業界史まで横断後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 246. クイージ（コルモ / SNKプレイモア総販売）

- record: `docs/real_machine_db/machines/2008-04-20_quieasy.md`
- commit: `7f71079fccf82a3ed980b9b2272a2dec9ed9c58e`
- releaseDate: `2008-04-20`
- releaseDateConfidence: `INDUSTRY_PRIMARY_EXACT_DELIVERY_DATE`
- systemType: ボーナス + CZ経由100G完走型RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: `1/390.10 / 1/368.18 / 1/348.60 / 1/315.08 / 1/287.44 / 1/266.41`。
- MB合成: `1/799.22 / 1/728.18 / 1/682.67 / 1/655.36 / 1/630.15 / 1/404.54`。
- 全ボーナス合成: `1/262.14 / 1/244.54 / 1/230.76 / 1/212.78 / 1/197.40 / 1/160.63`。当時業界記事の1/262.1〜1/160.6と一致。
- 機械割: `95.22 / 97.53 / 99.77 / 103.19 / 106.62 / 112.23%`。
- 1000円ベース: `34.95 / 35.18 / 35.44 / 35.70 / 35.96 / 36.32G`。
- BIG約254枚、MB約108枚。
- BIG後は最長30G CZ「わくわくタイム」。特殊リプレイで100G完走型RT「アイスエイジタイム」、純増約 `+0.7枚/G`。
- 通常時にも特殊リプレイ確率が上がる内部CZが周期的に存在。

### v0.7 resetBehavior

- 通常時周期CZの存在は当時業界/攻略資料で確認。ただし正確な周期G数は今回の再探索で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 周期CZカウンタの設定変更時リセット/据え置き・電源OFF→ON引継ぎ、CZ/RT中の残G・内部状態処理、本機固有変更判別は、検索語・資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井、設定変更時短縮天井、朝一専用モード、公開朝一数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。

## 今回の主要出典

取得日: 2026-09-01

### エイリアン2
- グリーンべると: https://web-greenbelt.jp/00003522/
- K-Navi機種TOP: https://p-kn.com/slot/790/
- K-Navi通常時小役/ベース: https://p-kn.com/slot/790/5458/
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/20/kyotai.php
- パチマガスロマガボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/20/h.php
- パチマガスロマガ小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/20/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5131
- 当時新台紹介: https://ameblo.jp/samurai777net/entry-10076921692.html
- パチスロ業界初まとめ個別仕様: https://slothistory.com/bangai_ksiyou.html
- パチスロ業界初まとめ議論11: https://www.slothistory.com/kokolog-11.html
- 当時攻略アーカイブ: https://plaza.rakuten.co.jp/mosnet/diaryall/

### クイージ
- グリーンべると: https://web-greenbelt.jp/00003513/
- P-WORLD業界ニュース転載: https://news.p-world.co.jp/articles/2737/greenbelt
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/02/a.php
- パチマガスロマガボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/02/h.php
- パチマガスロマガ小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/02/c.php
- パチマガスロマガ単独抽選: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/02/k.php
- K-Navi: https://p-kn.com/slot/792/direct/
- 当時攻略アーカイブ: https://plaza.rakuten.co.jp/mosnet/diaryall/

## 重複防止

- 既存244件の再追加禁止。
- 245 `エイリアン2`、246 `クイージ` も再追加禁止。
- `ALIENS2` / `ALIENS-X` は245の表記・型式系として扱い別レコード化しない。
- クイージはコルモ製、イートレック共同開発、SNKプレイモア総販売。メーカー名揺れで別レコード化しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準246件地点 / 2008-04-20まで完了。**
2. **同日4/20の残候補がないか最終監査してから、4/21一部先行導入説のある `ビートマニア（KPE）` を最優先で日付定義監査する。**
3. `ビートマニア` は4/21一部先行導入と5/7本導入の資料差を混同せず、先行導入をreleaseDateに採用するかを当時一次/業界資料で決める。
4. 4月後半の `シートラッド` 等、月精度しかない候補も具体日を再探索し、ビートマニアより前なら差し込む。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
