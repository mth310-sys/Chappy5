# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **847**
- latestRecordAdded: **バビロン(with桜丘ショコラ)**（タイヨー）— 2014-09-29主値 / 2014-10-06代替日CONFLICT
- latestRecord: `docs/real_machine_db/machines/2014-09-29_babylon-with-sakuragaoka-chocola.md`
- chronologicalFrontier: **2014-09-29**
- frontierLatestMachine: **バビロン(with桜丘ショコラ)**
- schema: **resetBehavior v0.7**
- status: **2014-09-29_GROUP_CLOSED_FOR_CURRENT_RESEARCH_WITH_BABYLON_DATE_CONFLICT**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、845件目 `2014-09-29_dream-jumbo.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **845件 / 2014-09-29 / 09-29_GROUP_OPEN**。
- No.846 **戦律のストラタス**、No.847 **バビロン(with桜丘ショコラ)** を追加し、09-29境界を再監査。

## No.846 — 戦律のストラタス

- record: `docs/real_machine_db/machines/2014-09-29_senritsu-no-stratus.md`
- commit: `8acfcce9918c7b36930a5a1355caa9964aec19d1`
- manufacturer: **TAKASAGO / 高砂電器産業**。
- 型式 **戦律のストラタスJW** / 検定番号 **4S0609**。
- KONAMI公式により **2014-09-29新潟県のみ先行稼働 / 2014-10-06全国稼働**を分離。releaseDate主値は最初の実ホール稼働9/29、`releaseDatePrecision: regional_early_hall_start_niigata`。
- 機械割メーカー発表: **96.8 / 97.8 / 99.9 / 103.4 / 108.4 / 115.2%**。一部二次資料の最大0.1pt差は平均せずSOURCE_ROUNDING_VARIATION。
- BIG: **1/357.08 → 1/274.46**、REG: **1/447.43 → 1/330.17**、AT初当たり: **1/654.87 → 1/414.37**、ボーナス+AT合算: **1/152.4 → 1/110.1**。
- base: **約30G/50枚**、AT純増 **約3.0枚/G**、戦律RUSH **1セット100枚+α**、BIG約200枚/REG約50枚。
- モード天井: 通常A999 / 通常B777 / 天国111 / 帝特六機333G。

### resetBehavior v0.7

- 設定変更時は**表示G数RESET + 通常モード再抽選**。
- 奇数設定: A15 / B70 / 天国15%。偶数設定: A10 / B65 / 天国25%。
- 朝一通常B以上: **奇数85% / 偶数90%**。
- 据え置き時は**液晶表示G数が前日値を引継ぎ**。ゲーム数管理カウンタCARRYOVERを支持。
- 設定変更なし単純電源OFF→ON、設定変更時の通常/高確A/高確B/超高確開始状態は直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 固定777Gリセット天井ではなく、モード再抽選で777/111G側が選ばれやすい構造として保存。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## No.847 — バビロン(with桜丘ショコラ)

- record: `docs/real_machine_db/machines/2014-09-29_babylon-with-sakuragaoka-chocola.md`
- commit: `e624fda0e63b1c065f958415e7a8a8efdde78539`
- manufacturer: **タイヨー**。
- 型式 **バビロンA** / 検定番号 **4S0663**。
- 導入日は **CONFLICT**:
  - HAZUSE: **2014-09-29導入開始**。
  - P-MEDIAの2014-11-07「9月29日〜リリース機種」集計にも本機を掲載。
  - グリーンべると2014-08-25: **10月5日より納品開始**。
  - ニッカンアミューズメント/PiDEA 2014-08-27: **10月5日納品予定**。
  - P-Summa: **10月6日導入開始**、同記事が引用する2014-08-25販売会社投稿は**9/28納品予定**。
- 地域先行/予定変更/DB誤差を直接説明するメーカー一次資料は固定できず、`DATE_CONFLICT_2014-09-29_VS_2014-10-06_WITH_DELIVERY_09-28_VS_10-05`を保持。漏れ防止の時系列主値は最古掲載の9/29。
- 市場掲載PAYOUT: **96.4 / 98.4 / 99.3 / 101.5 / 103.4 / 106.1%**。
- パチマガシミュレート: **95.71 / 97.66 / 98.52 / 100.68 / 102.65 / 105.16%**。定義差として分離。
- BIG: **1/292.6 → 1/267.5**、REG: **1/439.8 → 1/271.9**、合算: **1/175.7 → 1/134.8**。
- base: **約33.9〜35.2G/50枚**。
- BIG最大**335枚**、REG最大**103枚**。天井・RT/ART/AT/CZなし。

### resetBehavior v0.7

- 天井、規定Gモード、AT/ART/RT/CZ、有利区間は非該当。
- 設定変更/据え置き/単純電断時の本機固有リール初期化や変更判別は再探索後も `UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的ノーマル機・他タイヨー機のガックン情報は流用しない。
- 公開朝一専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-09-29群

### 登録済み

- No.845 ドリームジャンボ ～幸福のチケットを君に～（JPS）
- No.846 戦律のストラタス（TAKASAGO、高砂電器産業）
- No.847 バビロン(with桜丘ショコラ)（タイヨー、導入日CONFLICT保持）

### 判定

- **2014-09-29_GROUP_CLOSED_FOR_CURRENT_RESEARCH_WITH_BABYLON_DATE_CONFLICT**。
- 戦律のストラタスは10/6全国稼働時に重複レコードを作らない。
- バビロンも10/6代替日があるが同一レコードで日付競合を管理し、10/6到達時に重複作成しない。

## 遡及 resetBehavior QA

### ニューハナハナ-30

- handoff旧カーソルは `2007-02_new-hanahana-30.md` だったが、最新mainではすでに2026-09-07にv0.7再QA済み（commit `e8d55e7f8637cb7eaff5505cfd59b3b6a87f0dd0`）。
- 二重QAを避け、Git履歴上の次の実レコードへ前進。

### パチスロあっぱれ応援団

- record: `docs/real_machine_db/machines/2007-02-25_appare-ouendan.md`
- QA commit: `5b49d988989a69d1386a9ca8969cf2f984512f80`
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- reset欄をschema v0.7へ正規化。
- 通常時天井/規定Gモード/有利区間は非該当。
- 設定変更・据え置き・単純電断時の**稼働中RT状態/残G数処理**、ガックン等の本機固有変更判別は、公式・当時業界・旧攻略・古いDB・回顧資料を再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後年KPE別機種の設定変更/CZ情報を本機へ流用しない。
- resetBehaviorQA: **PARTIAL**。

### 次の遡及QAカーソル

- `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`（トレジャーパイレーツ）。

## 次回本線 — 2014-10-06群

- 09-30〜10-05境界をメーカー/業界/古いカレンダーで最終監査した上で10/06群へ進む。
- 現時点の具体候補:
  - **シンデレラブレイド2**（ネット）
  - **パチスロ三國志**（ニューギン）
  - **パチスロ大海物語with T-ARA**（三洋物産）
- ALL7 2014年10月導入一覧は上記3機を10/06パチスロ候補として掲載。必ずK-Navi/P-WORLD/メーカー系統で再照合して順序・漏れを確定する。
- 戦律のストラタスの10/06は全国稼働日メタデータ、バビロン10/06は日付CONFLICTの代替値であり、どちらも新規重複レコードを作らない。

## safeguard

- INDEXは旧19件表記なので進捗正本にしない。README規定どおりLATEST_HANDOFF + 実レコードを優先。
- 戦律のストラタスの新潟9/29先行と全国10/6を混同しない。
- バビロンの日付競合を一方的に解消しない。納品予定とホール導入を同義扱いしない。
- バビロンの市場PAYOUTとシミュレートPAYOUTを平均しない。
- あっぱれ応援団の `COMPLETE_CORE` をreset情報不足だけで崩さない。
- 純電断契約を据え置き情報や一般論から自動推定しない。
- P-WORLD等の最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 847 / chronologicalFrontier 2014-09-29 / 09-29_GROUP_CLOSED_FOR_CURRENT_RESEARCH_WITH_BABYLON_DATE_CONFLICT** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.847を再確認。
3. **2014-09-30〜10-05境界監査 → 2014-10-06群**へ進む。
4. 10/06群はシンデレラブレイド2 / パチスロ三國志 / パチスロ大海物語with T-ARAを起点に、全メーカー横断で漏れ監査してから追加順を確定。
5. 戦律のストラタス/バビロンの10/06表記では重複レコードを作らない。
6. 遡及QAは **`2007-03-11_treasure-pirates.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### 戦律のストラタス
- KONAMI公式 新潟先行/全国稼働: `https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_140922.html`
- KONAMI公式アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2014/stratus/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/06/`
- K-Navi: `https://p-kn.com/slot/2127/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0609/`
- スロパチクエスト reset: `https://www.slopachi-quest.com/article/stratas-reset/`
- ちょんぼりすた: `https://chonborista.com/slot/takasago-slot/3734/`

### バビロン(with桜丘ショコラ)
- グリーンべると: `https://web-greenbelt.jp/00007176/`
- ニッカンアミューズメント/PiDEA: `https://www.nikkansports.com/amusement/pachinko/news/f-pp-tp0-20140827-1357347.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0663/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/81/h.php`
- pacnk: `https://pacnk.com/slot/2014/babiron/top.php`
- P-Summa: `https://psumma.jp/pachislo/3711/`
- P-MEDIA 9/29〜リリース定点観測: `https://p-media.info/9%E6%9C%8829%E6%97%A5%E3%80%9C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E6%A9%9F%E7%A8%AE%E4%B8%AD%E5%8F%A4%E4%BE%A1%E6%A0%BC%E5%AE%9A%E7%82%B9%E8%A6%B3%E6%B8%AC%EF%BC%8F%E3%82%B9%E3%83%BC%E3%83%91/`

### 10/06境界候補
- ALL7 2014年10月: `https://www.all7.jp/plans/index/2014/10`
- K-Navi パチスロ大海物語withT-ARA: `https://p-kn.com/slot/2109/`
