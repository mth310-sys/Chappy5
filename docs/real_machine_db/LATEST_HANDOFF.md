# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **756**
- latestMachineAddedByChronology: **パチスロ クイーンズブレイド2 玉座を継ぐ者**（JPS）
- latestRecord: `docs/real_machine_db/machines/2013-08-19_queens-blade-2-gyokuza-wo-tsugu-mono.md`
- chronologicalFrontier: **2013-08-19**
- frontierLatestExactDateMachine: **パチスロ クイーンズブレイド2 玉座を継ぐ者**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-08-19_GROUP__NEXT_ZEGAPAIN_THEN_CONTRA3D__AUDIT_BEFORE_CLOSE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-08-19_sengoku-otome-kengeni-mau-shiroki-kensei.md` を再読。
- INDEXは旧集約状態のため、README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続。
- 開始時main正本: recordCount **755** / chronologicalFrontier **2013-08-19** / 08-19群OPEN。
- 同日未処理先頭 **パチスロ クイーンズブレイド2 玉座を継ぐ者** はrepo未登録を確認し、性能コア + resetBehavior v0.7を756件目として追加。

## 今回追加 — パチスロ クイーンズブレイド2 玉座を継ぐ者

### identity / 性能コア

- manufacturer: **JPS（ジェイピーエス）**。
- releaseDate: **2013-08-19**。K-Navi / アタリ7 / 後年機種DBで照合。
- generation/system: **5号機 / AT専用機**。
- 型式名・検定番号は今回の確認可能資料で安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 機械割: **96.8 / 98.2 / 98.7 / 101.3 / 104.1 / 108.2%**。96.79等の精密値との差は丸め差として扱う。
- AT初当たり: **1/266 / 1/260 / 1/255 / 1/241 / 1/222 / 1/201**。
- baseGamesPer50: **約29G/50枚**（後年機種DB単一数値のため ANALYSIS_SECONDARY_SINGLE_NUMERIC）。
- AT「アルドラクエスト」: **1セット40G or 100G / 純増約2.5枚/G**。
- 通常時内部状態: **通常 / 高確 / 超高確**。
- モード別天井: **超天国32G / 天国A128G / 天国B384G / 通常A640G / 通常B960G / 通常C1088G**。最大はAT間1088GでAT当選。

### resetBehavior v0.7

- **設定変更で天井までのゲーム数をリセット**。
- **モード / 内部状態 / 液晶ステージを再抽選**。液晶は **市場 / エリナ宿舎 / トモエ宿舎**から抽選。
- 設定変更時モード移行率を公開数値で保存:
  - 設定1: **通常A57.73 / 通常C6.25 / 天国A10.00 / 天国B25.52 / 超天国0.50%**。
  - 設定2: **59.92 / 6.25 / 10.00 / 23.57 / 0.26%**。
  - 設定3: **62.00 / 6.25 / 10.00 / 21.62 / 0.13%**。
  - 設定4: **64.02 / 6.25 / 10.00 / 19.66 / 0.06%**。
  - 設定5: **65.97 / 6.25 / 10.00 / 17.71 / 0.06%**。
  - 設定6: **67.93 / 6.25 / 10.00 / 15.76 / 0.06%**。
- 天国A/B/超天国合計は **36.02 / 33.83 / 31.75 / 29.72 / 27.77 / 25.82%**。ただし天国B天井は384Gなので「全て128G以内」とは扱わない。
- 設定変更専用の状態別数値振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- **単純電源OFF→ONでは天井G数 / モード / 状態 / 液晶ステージをすべて引き継ぐ**ことを本機専用必勝本資料で直接確認。
- 「据え置き」という単独ラベルでの別契約は今回 **UNVERIFIED_AFTER_RESEARCH**。電源サイクルの直接契約とは分離して記録。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetPenalty: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 変更判別: 設定変更では液晶ステージ再抽選、単純電源OFF→ONではステージ引継ぎのため、前日最終ステージ既知時は朝一差分が推測材料。本機固有ガックン / 初期出目 / ランプ等は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- ベース機の機械割はK-Navi / アタリ7等の **96.8～108.2%系列**を採用。後発・別仕様の「バトルバージョン」系数値を混入させない。
- 96.79等の精密値と96.8等は丸め差でありCONFLICT扱いしない。
- 設定変更時公開表に通常Bへの直接移行がないことと、通常時一般のモード集合に通常Bが存在することを混同しない。
- 一般的な5号機の挙動から据え置き契約を推測補完しない。

## 境界監査 / 同日群

- 2013-08-19登録済み:
  1. **戦国乙女～剣戟に舞う白き剣聖～**
  2. **パチスロ クイーンズブレイド2 玉座を継ぐ者**
- 同日未処理既知候補:
  1. **パチスロ ゼーガペイン**（山佐）
  2. **魂斗羅3D**（KPE）
- 08-19群は **OPEN**。上記2機種処理と全メーカー横断監査後にCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- `空手バカ一代` 自体は既にresetBehaviorを保持しているため重複更新しない。
- 今回は実ファイル順で次のresetBehavior欠損機を一意に固定できるところまで進められず、誤ったQA前進を避けてカーソルを維持。
- 既存の `COMPLETE_CORE` / `PARTIAL` 等、性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 756 / chronologicalFrontier 2013-08-19 / 08-19群OPEN** から開始。
2. 最優先: **パチスロ ゼーガペイン（山佐）**。repo既登録確認 → 性能コア + resetBehavior v0.7。
3. 続いて **魂斗羅3D（KPE）**。
4. 08-19同日をメーカー横断再監査し、他に未登録がなければ群をCLOSED。
5. その後、次の導入日境界へ時系列前進。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ クイーンズブレイド2 玉座を継ぐ者

- K-Navi: `https://p-kn.com/slot/1893/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/27/l.php`
- パチ＆スロ必勝本「天井&設定変更」: `https://p.hisshobon.jp/machine/2251/1/41318`
- アタリ7: `https://www.atari7.com/slot/date1431056481.php`
- みんスロ: `https://minslo.com/クイーンズブレイド2-玉座を継ぐ者/`
- pacnk: `https://pacnk.com/slot/tools/sh_queensblade2.html`
- パチスロ立ち回り講座 5号機天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`

### 2013-08-19次候補

- ゼーガペイン K-Navi: `https://p-kn.com/slot/1883/`
- 魂斗羅3D K-Navi: `https://p-kn.com/slot/1884/`

## commits

- previous 755th record add: `feb1aa75fe474f7d65dff4f107fbab35bce58c99`
- 756th record add: current run (`db: add Queens Blade 2 with resetBehavior v0.7`)
