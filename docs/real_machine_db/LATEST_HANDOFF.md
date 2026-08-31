# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は202件目 `赤ドン`。
- main内検索で `ファイアーヒーローS` の既存/別名レコードがないことを確認。
- **203件目 `ファイアーヒーローS` を追加済み。**

## 203. ファイアーヒーローS

- new record: `docs/real_machine_db/machines/2007-11-26_fire-hero-s.md`
- commit: `78dc143b42aa03e4e4ecec1c9e94e0577d559369`
- manufacturer: アトム
- releaseDate: 2007-11-26
- generation: 5号機
- systemType: ボーナス + CZ + RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・系統

- パチビーで2007-11-26導入、アトムを確認。
- P-WORLDでアトム、5号機RT、2007年11月導入を確認。
- 検定通過整理資料で2007-10-15 `ファイアーヒーロー S（回胴）`。
- 2008年の後継 `ファイアーヒーローII` とは別機種として分離。

### 性能コア

パチマガスロマガ解析:
- BIG合成: `1/1092.27 → 1/819.20`
- REG: `1/262.14 → 1/218.45`
- 合算: `1/211.41 → 1/172.46`
- BIG純増約313枚、REG純増約36枚。
- CZから50Gの増加型RTへ突入。

50枚ベースとRTの1Gあたり純増は、機種名/型式揺れ/メーカー/50枚/1000円/ベース/コイン持ち/RT純増等で当時解析・旧DB・回顧資料を横断したが、直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 機械割 CONFLICT

平均せず双方保持:
- パチマガスロマガ・シミュレート: `98.16 / 99.15 / 100.12 / 101.14 / 102.10 / 103.08%`
- 後年スペック整理: `97.22 / 98.69 / 100.67 / 102.19 / 104.33 / 106.65%`

高設定ほど差が拡大し単純丸めではないため `CONFLICT`。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時CZ開始/RT開始/状態再抽選の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時CZ/RT残G・内部状態 `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ON時CZ/RT残G・内部状態 `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井を確認できず、対象天井カウンタ `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: CZ/RT状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/表示判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された設定変更専用数値は今回確認できず。

主要出典:
- パチビー: https://www.pachibee.jp/machines/schedule/2007-11
- P-WORLD: https://www.p-world.co.jp/machine/database/4991
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/atom_slot/01/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/atom_slot/01/h.php
- 後年スペック整理: https://pachinko.hatenablog.jp/entry/2007/11/fire-hero
- 検定通過整理: https://q-and-a.hatenablog.com/entry/2016/10/04/141528

## 直前の既存群

- 199件目 `スーパービンゴV`
- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`
- 202件目 `赤ドン`
- 203件目 `ファイアーヒーローS`

## 境界監査メモ

- `パチスロシティーハンター` はグリーンべると2007-11-09記事で **納品12月6日開始予定** を確認。11月月次資料だけで11月機として差し込まず、12月キューへ送る。
  - https://news.p-world.co.jp/articles/2462/greenbelt
- `ビーチクラブ` はSANKYO公式オンライン博物館で **2007.11**、型式 `ビーチクラブS`、7Gチャンスタイム→特殊リプレイで77G RTまで確認。ただし具体導入日は未確定。
  - https://www.sankyo-fever.jp/collection/867/
- `パチってスロット` は5号機クロニクル等で **2007/11** までは確認。具体導入日は未確定。
  - https://5goki.com/spiky

## resetBehavior 遡及QA

### クランキーコンドルX（2006-08）

- 既存性能コア値・既存CONFLICTを維持したままv0.7 `resetBehavior` 追加済み。
- QA commit: `866b551249aab530513527a8dae09955e359ad9c`
- 次は2006年8月群の既存レコードを時系列走査し、resetBehavior節未収集の最古機から継続。

## 次回再開地点

1. **LATEST_HANDOFF基準203件地点から継続。**
2. 2007年11月の月精度未処理候補 `パチってスロット` / `ビーチクラブ` の具体導入日を最優先で再探索する。11/26以前または同日までと確定した場合は漏れ防止で遡及差し込み。
3. 同じ11月の未処理候補をメーカー別一覧・当時業界記事・導入カレンダー・旧DBで境界監査し、11月を閉じる。
4. `パチスロシティーハンター` は2007-12-06納品開始予定を一次業界記事で確認済みなので12月キューへ送る。
5. `ファイアーヒーローS` 追加QAは50枚ベース、RT純増/G、設定変更/据え置き/電断時CZ・RT状態、変更判別を優先。後継IIの値を流用しない。
6. resetBehavior遡及QAは `クランキーコンドルX` の次の既存レコードを時系列走査し、2006年8月群（`じゃりン子チエ` / `ランブルローズ` / `逮捕しちゃうぞ` 等）の既補完有無をmainで確認してから処理。
7. 既存 `COMPLETE_CORE` は性能コア完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
