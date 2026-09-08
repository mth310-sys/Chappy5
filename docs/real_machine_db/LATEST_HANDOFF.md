更新日: 2026-09-08

## 現在地点
- recordCount: **979**
- latestRecordAdded: **パチスロ 翠星のガルガンティア**（D-light / ディ・ライト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-05-30_suisei-no-gargantia.md`
- chronologicalFrontier: **2016-05-30**
- frontierLatestMachine: **パチスロ 翠星のガルガンティア**
- schema: **resetBehavior v0.7**
- status: **2016-05-30_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.978 `2016-05-30_code-geass-r2.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点: recordCount 978 / chronologicalFrontier 2016-05-30 / 05-30群OPEN。
- HANDOFF指定の次未処理「パチスロ 翠星のガルガンティア」をGitHub重複なし確認後、No.979として追加。
- 2016-05-30群は継続OPEN。次は山佐 **「ナイツ2」**。

## 2016-04-18群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（4/11 canonical、4/18資料CONFLICT保持。重複登録しない）
- No.973 スーパーストリートファイターIV パチスロエディション
- No.974 アステカ-太陽の紋章-
- No.975 ニューチバリヨ-30
- No.976 ニューチバリヨ（25Φ）
- No.977 スーパーリノMAX

### トリプルクラウンG-30 境界監査
- 月次回顧の「2016年4月」表記だけでは具体導入日を固定せず、複数後年DBの2016年6月表記を優先して **2016年6月群で再監査**。
- status: `DEFERRED_TO_2016_06_DATE_AUDIT`。

## 2016-04-19〜2016-05-29 — CLOSED_FOR_CURRENT_RESEARCH
- HAZUSE新台カレンダーでは4月最終群04/18の次が05/30。
- グリーンべると2016-02-12記事: 全日遊連が伊勢志摩サミット対応として **2016-05-02〜05-27** の全国一斉遊技機入替自粛を決定。
- K-Navi当時解説も5/30まで新台導入がない旨を説明。
- このため05/30より前へ月次資料だけを根拠に機種を前倒し配置しない。

## 2016-05-30群 — OPEN
登録済み:
- No.978 **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
- No.979 **パチスロ 翠星のガルガンティア**（D-light / ディ・ライト）

次の未処理候補:
1. **ナイツ2**（山佐）
2. **めぞん一刻 桜の下で**（オリンピア）
3. **コクッチーブラック**
4. **パチスロ バルタン星人**
- 05/30群は上記以外も全メーカー横断で再監査し、漏れ確認後にCLOSED判定する。

## No.979 — パチスロ 翠星のガルガンティア
- manufacturer: **D-light（ディ・ライト）**
- releaseDate canonical: **2016-05-30**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / A+ART / 差枚数管理型ART**

### identity / release date
- パチビー、パチ7、pachislo-data、ちょんぼりすた等で2016-05-30導入、D-lightを照合。
- 実機流通資料でもD-light / 2016年5月導入 / 5号機を確認。
- 正式型式・検定番号は作品名、メーカー表記揺れ、5S/6S、型式、検定通過、実機DB等へ検索を広げたが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。推測登録しない。

### performanceCore
- 機械割: **97.1 / 98.4 / 99.9 / 103.9 / 106.8 / 110.1%**。
- 純ボーナス: **全設定共通1/873.8**。
- ART初当たり: **1/315.0 / 302.1 / 288.1 / 261.6 / 242.6 / 228.8**。
- ボーナス+ART合算: **1/231.5 / 224.5 / 216.7 / 201.3 / 189.9 / 181.3**。
- ベース: **約37G/50枚**。
- ART純増: **約1.7枚/G**、ボーナス込み **約1.9枚/G**（別定義で保持）。
- 純ボーナス: **約300枚**。
- ART「翠星チャンス」: 差枚数管理型。
- 通常天井: **ART間1000G消化後、次回連続演出発展でART濃厚**。ボーナスでは天井ゲーム数をリセットしない。

### resetBehavior v0.7
- 設定変更: **通常天井進捗RESET → リセット専用0/100/200/300Gテーブル再抽選 / 内部状態RESELECT / バーストpt再抽選**。
- リセット天井公開値: **0G 10.16% / 100G 10.16% / 200G 39.84% / 300G 39.84%**。300G到達即発動ではなく次回連続演出発展が条件。
- 設定変更時内部状態: **低確62.5% / 高確25.0% / 超高確12.5%**。
- バーストpt再抽選: 0・1pt各0.4% / 2・3pt各25.0% / 4・5pt各14.5% / 6・7pt各7.8% / 8・9pt各2.3%。
- 据え置き: **ART間天井CARRYOVER_SUPPORTED / バーストpt CARRYOVER**。内部状態を独立表記した本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: **限定解除の前兆カウントはCARRYOVER** を複数資料で直接確認。ART間天井カウンタ・低確/高確/超高確の完全な純電断比較は `UNVERIFIED_AFTER_RESEARCH` とし、表示カウンタ保持から内部全項目を推定しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 通常最大1000G→リセット最大300G+α、60.16%が200G以下選択、高確以上37.5%。
- 朝一不利: 前日天井進捗を失う / 前日高バーストptは再抽選で失う可能性。ただし最大300G短縮が強いため総じて朝一価値は高い。
- 変更判別:
  - 限定解除前兆G数表示は純電源ON/OFFでは消えないため、閉店時表示あり→翌朝消失なら設定変更濃厚（店側手動対策には注意）。
  - バーストptは据え置き時引継ぎ、変更時再抽選。前日把握値とのズレは変更を支持するが偶然一致し得るため確定ではない。
  - 朝一に連結器/凪の日等の高確示唆ステージへ早期移行すれば変更期待を上げる材料。
  - ガックンは当時資料でも未確認推測止まりのため `NONE_CONFIRMED_AFTER_RESEARCH`。

### data-quality notes
- `10.2/39.8%` と `10.16/39.84%` は同一系列の丸め差。CONFLICTにしない。
- 性能コアは複数解析で整合し、重大CONFLICTなし。
- 純電断は限定解除カウンタ保持のみ直接固定。天井・内部状態まで一括CARRYOVERとは推測しない。
- 正式型式名・検定番号は十分な再探索後も直接資料を固定できずUNVERIFIED。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaNextInspection: **2006-02_cutie-honey.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 979 / chronologicalFrontier 2016-05-30 / 05-30群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.979を最新mainから再取得。
3. 次の未処理は **2016-05-30 山佐「ナイツ2」**。GitHub重複確認後、正式型式・検定・性能コア + resetBehavior v0.7を収集する。
4. 続いて **めぞん一刻 桜の下で → コクッチーブラック → パチスロ バルタン星人** を候補順に監査する。ただし具体導入日variant/重複を先に固定し、順序は資料に従って修正可。
5. 05/30群を全メーカー横断で再監査し、漏れ確認後にCLOSED判定する。
6. **トリプルクラウンG-30** は2016年6月群で具体導入日を再監査。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。

## 主要出典 — 取得日 2026-09-08
### No.979 翠星のガルガンティア
- パチビー: https://www.pachibee.jp/machines/movie/216050001
- パチ7 天井: https://pachiseven.jp/machines/4837/cutout/78
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/gargantia/
- すろぱちくえすと設定変更: https://www.slopachi-quest.com/article/gargantia-reset/
- pachislo-data: https://pachislo-data.com/diright/24961
- ちょんぼりすた: https://chonborista.com/slot/d-light/19556/
- 真パチスロ備忘録: https://sin-surobi.com/garugan/16041/
- ピロ式: https://piro-shiki.com/gargantia-tenjo-reset/
- A-SLOT実機DB: https://www.a-slot.com/SHOP/dlight_8.html

### 境界監査 / 次候補
- グリーンべると 入替自粛: https://web-greenbelt.jp/00008425/
- K-Navi 新台導入がない: https://p-kn.com/beginners/42/264/
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
