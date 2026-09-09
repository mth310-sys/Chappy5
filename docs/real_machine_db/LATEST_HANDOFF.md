更新日: 2026-09-09

## 現在地点
- recordCount: **1079**
- latestRecordAdded: **ハッピージャックポット**（岡崎産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_happy-jackpot.md`
- chronologicalFrontier: **2017-05-08**
- frontierLatestMachine: **ハッピージャックポット — No.1079**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_CLOSED_NEXT_2017-05-22_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1077「ラッキーベガス」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1077件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN**。
- handoff指定の次候補 **「ぱちスロ 水戸黄門」** をNo.1078として登録。
- 続いて **「ハッピージャックポット」** をNo.1079として登録。
- 2017-05-08群を、すろぱちくえすと2017年導入一覧・モゲスロ2017カレンダー・一撃2017年5月カレンダーおよび個別機種資料で横断再監査。
- すろぱちくえすとの5/8掲載7機（サクラ大戦、水戸黄門、グラップラー刃牙、忍魂、呪怨、ラッキーベガス、ハッピージャックポット）は全て登録済み。モゲスロはこれにマクロスフロンティア3を5/8として掲載するが、同機は既存No.1072でregionalEarly 5/1 / canonical 5/8として処理済み。
- 一撃カレンダーは5/8をサクラ大戦・呪怨・忍魂・ラッキーベガスの4機に絞っているため、単一カレンダー依存せず複数系統の和集合で監査した。
- 上記のため **2017-05-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH** と判定。
- 次の主要日付境界は **2017-05-22**。すろぱちくえすとでは `タイムクロス2 / 逆転裁判 / ラストエグザイル 銀翼のファム / パチスロ 黒神 / 賞金首2` を掲載。一撃では5/22に黒神を掲載しており、5/22群はOPENとして次回全メーカー横断監査を継続する。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線優先で今回は未更新。

## No.1078 — ぱちスロ 水戸黄門
- manufacturer: **京楽産業.**
- releaseDate canonical: **2017-05-08**
- generation/system: **5号機 / 5.5号機 / A+ART / 周期管理型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT**

### performanceCore
- 機械割: **97.0 / 98.1 / 100.1 / 104.2 / 106.4 / 109.0%**。
- ART初当たり: **1/395.6 / 393.9 / 373.8 / 330.0 / 280.8 / 261.3**。
- ボーナス合算: **1/1057.0 / 1057.0 / 1057.0 / 1008.2 / 1008.2 / 949.8**。
- ベース: **約44G/50枚**。
- ART「勧善懲悪ボーナス」純増: **約1.6枚/G**。一部資料の約1.7枚/Gはボーナス込み表記として定義分離。
- リアルボーナス: **100枚 or 200枚**。
- ART: **1セット40G + 継続演出5G**。
- 通常天井: **11周期到達でART確定**。1周期127里が基本だが短縮契機があり、平均約80Gとされる周期型。

### resetBehavior v0.7
- settingChange: 天井周期/進捗RESET、内部モードRESELECT、内部状態RESET/RESELECT、開始目的地は江戸、里表示「??」。
- powerCycle: 天井/モード/状態CARRYOVER。表示上は江戸・「??」となる資料があり見た目単独判別不可。
- carryOver: 天井/モード/状態CARRYOVER。
- 公開朝一値: **2周期目までのART突入可能性 約40%**。
- これは「2周期天井確定」ではない。約40%の早期当選優遇として保持。
- ガックン: すろぱちくえすとの検証で**判別不可**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- formalModelName / certificationNumber / 設定変更時モード完全振り分け / 朝一内部状態数値は再探索後 `UNVERIFIED_AFTER_RESEARCH`。

### conflict
- 導入日: PiDEA X（業界記事）・ちょんぼりすた・期待値見える化・2-9伝説は **2017-05-08**。すろぱちくえすとは記事冒頭5/8だが機種情報表のみ **2017/4/17**、5号機クロニクルは **2017/4**。平均せず `CONFLICT_RELEASE_DATE_2017_05_08_VS_2017_04_17_OR_2017_04_MONTH`。業界記事+複数一致の5/8をcanonical。

## No.1079 — ハッピージャックポット
- manufacturer: **岡崎産業**
- releaseDate: **2017-05-08**
- generation/system: **5号機 / 5.5号機 / ノーマルAタイプ / 完全告知**
- formalModelName: **ハッピージャックポット／H1**
- certificationNumber: **6S1329**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.7 / 98.2 / 99.8 / 103.3 / 107.1 / 110.5%**。
- BIG: **1/295.21 / 288.70 / 282.48 / 267.49 / 252.06 / 240.94**。
- REG: **1/358.12 / 336.08 / 319.69 / 288.70 / 271.93 / 240.94**。
- 合算: **1/161.82 / 155.30 / 149.97 / 138.85 / 130.81 / 120.47**。
- 50枚ベース: 設定1→6 **34.99 / 35.20 / 35.38 / 35.73 / 36.32 / 36.72G**。
- BIG純増 **312枚**、REG最大 **104枚**。
- 天井/AT/ART/CZ/周期: **NONE / NOT_APPLICABLE**。

### resetBehavior v0.7
- ノーマルAタイプで天井・モード管理・内部性能状態がないため、gameCounterReset / ceilingAfterReset / modeAfterReset は **NOT_APPLICABLE**。
- 設定変更専用の朝一当選優遇・天井短縮・モード優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 電源OFF→ON専用の主要恩恵/不利: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン: 当時解析は**不明**。表記・検索語・資料系統変更後も決定的本機固有判別を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-08群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  1. パチスロ マクロスフロンティア3 — No.1072（regionalEarly 5/1 / canonical 5/8として既存処理）
  2. パチスロサクラ大戦～熱き血潮に～ — No.1073
  3. パチスロ 呪怨 — No.1074
  4. 忍魂 ～暁ノ章～ — No.1075
  5. パチスロ グラップラー刃牙 — No.1076
  6. ラッキーベガス — No.1077
  7. ぱちスロ 水戸黄門 — No.1078
  8. ハッピージャックポット — No.1079
- すろぱちくえすと・モゲスロ・一撃・個別機種資料を横断。現時点で追加未登録候補なし。

## 次の2017-05-22群候補
- **タイムクロス2**
- **逆転裁判**
- **ラストエグザイル 銀翼のファム**
- **パチスロ 黒神 The Animation**
- **賞金首2**
- 単一カレンダー差があるため、この5機を固定リストと思い込まず、処理時に全メーカー横断監査を行う。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1079を再取得。
2. **1079件 / chronologicalFrontier 2017-05-08 / 5/8群CLOSED / 5/22群OPEN** を正本として継続。
3. 次未処理 **「タイムクロス2」** をNo.1080候補として性能コア+resetBehavior v0.7まで処理。
4. 続いて `逆転裁判 → ラストエグザイル 銀翼のファム → パチスロ 黒神 The Animation → 賞金首2` を候補に、導入日・重複を都度照合して処理。
5. 5/22群を全メーカー横断監査し、漏れがなければCLOSED判定して次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1078 水戸黄門
- グリーンべると: https://web-greenbelt.jp/00009435/
- PiDEA X: https://pidea.jp/articles/%E6%99%82%E4%BB%A3%E5%8A%87%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%AE%E6%9C%80%E9%AB%98%E5%B3%B0%E3%80%8C%E6%B0%B4%E6%88%B8%E9%BB%84%E9%96%80%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E4%BA%AC%E6%A5%BD
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/34909/
- すろぱちくえすと: https://www.slopachi-quest.com/article/mitokoumon/
- 2-9伝説: https://29den.com/mitokohmon/
- 期待値見える化: https://slotjin.com/zone/mitokoumon/
- P-WORLD: https://www.p-world.co.jp/machine/database/8330
- 5号機クロニクル: https://5goki.com/kyoraku

### No.1079 ハッピージャックポット
- HAZUSE: https://hazuse.com/machine/pachislot/6S1329/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S1329/genre/201/
- すろぱちくえすと: https://www.slopachi-quest.com/article/happyjackpot/
- P-WORLD: https://www.p-world.co.jp/machine/database/8337

### 5/8群監査 / 次境界
- すろぱちくえすと 2017導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- モゲスロ 2017導入カレンダー: https://moge-site.com/new-slot2017
- 一撃 2017年5月新台カレンダー: https://1geki.jp/newmachinecalender/201705/
