# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は205件目 `パチってスロット`。
- 2007年11月の境界監査で `華一番` / `華一番-30` がmain未収録と確認。
- パイオニア公式が25φ `ハナイチバン` と30φ `ハナイチバン-30` を別製品として掲載し、デザイン違いで同時発表・2007年11月発売と明記。
- パチマガスロマガは `華一番&30` 共通解析ページで性能値を掲載しており、兄弟機の推定流用ではなく25φ/30φ共通性能の直接根拠がある。
- **206件目 `華一番`、207件目 `華一番-30` を独立レコードとして追加済み。**

## 206. 華一番

- new record: `docs/real_machine_db/machines/2007-11-11_hana-ichiban.md`
- commit: `ca9af462e8f5ac309cfe0759a5bfaf8dc43afc80`
- manufacturer: パイオニア
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 7GプチRT
- medalDiameter: 25φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・型式

- パイオニア公式: ハナイチバン / ハナイチバン-30を別製品として掲載、25φ・30φデザイン違い同時発表、2007年11月発売。
- グリーンべると2007-10-12記事: `2007-11-11` 納品開始予定。
- パチビー: `2007-11-12` 導入機種として掲載。
- 納品開始とホール導入日の定義差のためCONFLICT扱いせず双方保持。

### 性能コア

- BIG: `1/334 → 1/273`
- REG: `1/381 → 1/315`
- 合算: `1/178 → 1/146`
- 機械割: `97 / 99 / 101 / 103 / 105 / 107%`
- 1000円ベース: `36.37 / 36.37 / 37.40 / 38.14 / 39.01 / 39.12G`
- BIG: 348枚超払い出し終了、純増約300枚。
- REG: 108枚超払い出し終了、純増約100枚。
- 巻物またはチェリー成立後7Gの演出用プチRT `おかわりタイム`。

### v0.7 resetBehavior

- settingChangeBehavior: 7GプチRT残状態/初期状態は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時プチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ON時プチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。
- ceilingAfterReset: 短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: 7GプチRT中の変更/電断時残状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/ランプ・役物等による変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された設定変更時専用数値は確認できず。

主要出典:
- パイオニア公式: https://www.slot-pioneer.co.jp/products/2009.html
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2426/greenbelt
- パチビー2007年11月導入カレンダー: https://www.pachibee.jp/machines/schedule/2007-11
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/h.php
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/a-1.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/c-1.php
- K-Navi: https://p-kn.com/slot/723/

## 207. 華一番-30

- new record: `docs/real_machine_db/machines/2007-11-11_hana-ichiban-30.md`
- commit: `1ab82bc3d1f30deaab1f2d02f948076f3f62160f`
- manufacturer: パイオニア
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 7GプチRT
- medalDiameter: 30φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 25φとの扱い

- メーカー公式が25φと30φを別製品として掲載するため、本DBでも独立レコード化。
- 一方、パチマガスロマガは `華一番&30` として同一ページに設定別BIG/REG/合算、機械割、ベース、ボーナス獲得性能、プチRT仕様を掲載。
- したがって性能コアは「兄弟機だから同じ」と推定したものではなく、25φ/30φ共通解析値として採用。

### 性能コア

25φ版と共通の直接解析値:
- BIG: `1/334 → 1/273`
- REG: `1/381 → 1/315`
- 合算: `1/178 → 1/146`
- 機械割: `97 → 107%`
- 1000円ベース: `36.37 → 39.12G`
- BIG純増約300枚 / REG純増約100枚。
- 7GプチRT `おかわりタイム`。

### v0.7 resetBehavior

- 設定変更/据え置き/電源OFF→ON時の7GプチRT残状態は `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井、リセット短縮天井、朝一専用モード、変更固有恩恵/不利、公開朝一数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- 30φ固有または25/30共通の変更判別要素は `UNVERIFIED_AFTER_RESEARCH`。

## 直前の既存群

- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`
- 202件目 `赤ドン`
- 203件目 `ファイアーヒーローS`
- 204件目 `ビーチクラブ`
- 205件目 `パチってスロット`
- 206件目 `華一番`
- 207件目 `華一番-30`

## 境界監査メモ

- `パチスロシティーハンター` はグリーンべると2007-11-09記事で納品12月6日開始予定確認済み。12月キューへ送る。
- パチビー2007年11月導入カレンダーでは `NEO花物語` と `華一番` が11月12日、`スーパービンゴV` と `超お父さん2` が11月19日、`哲也` が11月20日、`赤ドン` / `ファイアーヒーローS` が11月26日。
- main検索で `NEO花物語` と `スーパービンゴV` の既存レコードが見つからないことを今回確認。
- 華一番25φ/30φは今回登録済み。

## resetBehavior 遡及QA

### クランキーコンドルX（2006-08）

- 既存性能コア値・既存CONFLICTを維持したままv0.7 `resetBehavior` 追加済み。
- QA commit: `866b551249aab530513527a8dae09955e359ad9c`
- 次は2006年8月群の既存レコードを時系列走査し、resetBehavior節未収集の最古機から継続。

## 次回再開地点

1. **LATEST_HANDOFF基準207件地点から継続。**
2. 2007年11月12日候補のうちmain未収録を確認した **`NEO花物語`（オーイズミ）を最優先**で性能コア + v0.7 resetBehaviorまで処理する。
3. その後、11月12〜18日の漏れを監査し、問題なければmain未収録確認済み **`スーパービンゴV`（2007-11-19導入カレンダー）**へ進む。
4. 11月全体をメーカー別一覧・当時業界記事・導入カレンダー・旧DBで閉じた後、12月1〜5日候補を監査し、未処理がなければ `パチスロシティーハンター`（12月6日納品開始予定）へ進む。
5. 華一番/華一番-30追加QAは、設定変更/据え置き/電断時7GプチRT残状態、本機固有変更判別、30φ版の日単位ホール導入実績日を優先。
6. resetBehavior遡及QAは `クランキーコンドルX` の次の既存レコードを時系列走査し、2006年8月群（`じゃりン子チエ` / `ランブルローズ` / `逮捕しちゃうぞ` 等）の既補完有無をmainで確認してから処理。
7. 既存 `COMPLETE_CORE` は性能コア完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
