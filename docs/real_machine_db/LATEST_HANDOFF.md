# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **483**
- latestMachineAdded: **南国育ちスペシャル-30**（オリンピア / 2010-06-07主値・導入日CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_nangoku-sodachi-special-30.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **南国育ちスペシャル-30**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線482「南国育ちスペシャル」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **482** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFF指定の最優先候補、30Φ「南国育ちスペシャル-30」をrepo未登録確認後483件目として追加。
- 30Φは25Φ「南国育ちスペシャルZ」と別型式 `南国育ちスペシャルYH-30`、検定番号 `0S0130`。25Φ未確認値は自動転記していない。
- 導入日はHAZUSE **2010-06-04** / パチビー **2010-06-07** で競合。前線25Φの当時業界資料では6/6納品予定系もあるため、推測で統合せず `CONFLICT` を保持し、主値は6/7とした。

## 483 — 南国育ちスペシャル-30 要約

- メーカー: **オリンピア**
- 型式名: **南国育ちスペシャルYH-30**
- 検定番号: **0S0130**
- 導入主値: **2010-06-07** / HAZUSE **2010-06-04** → `CONFLICT`
- 世代/タイプ: **5号機 / 30Φ沖スロ / ボーナス＋ART / モード管理 / 2段階天井 / 無限ART**
- PAYOUT: **96.2 / 99.2 / 102.4 / 106.4 / 111.3 / 116.3%**
- BIG: **1/397 / 1/392 / 1/390 / 1/386 / 1/383 / 1/381**
- REG: **1/655 / 1/636 / 1/618 / 1/590 / 1/565 / 1/537**
- 合算: **1/247 / 1/243 / 1/239 / 1/233 / 1/228 / 1/223**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。第1天井後ATの約200G/50枚は通常時ベースへ混入しない。25Φ30.5Gも別型式のため自動転記しない。
- BIG: **約204枚** / REG: **約48枚**
- ART「南国チャンス」: **50G / 約+1.5枚/G / 約83%継続**
- 無限南国チャンス: **次回ボーナスまで継続**
- 通常内部モード: **通常（低確） / 高確率 / 天国 / スペシャル南国**
- スペシャル南国モード: ボーナス時ART突入 **75%** / ART終了後同モード継続 **75%**
- 第1天井: **ボーナス後996G → AT状態**
- 第2天井: **RT終了後/通常時1600G → 次回ボーナスまで無限ART相当**
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL_BASE_UNVERIFIED**

## resetBehavior v0.7 — 南国育ちスペシャル-30

- **設定変更**: 30Φ専用P-WORLD/パチビー資料で、**1600G第2天井までのゲーム数は設定変更後も引き継がれる**ことを直接確認。
- **996G第1天井**: 設定変更時のカウンタ処理は30Φ固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。25Φの両天井引継ぎ情報は自動転記しない。
- **据え置き**: 1600G進捗は設定変更でも保持されるため宵越し価値を持つ。996G/モード/ART・RT状態の据え置き専用記述は未確認。
- **電源OFF→ON**: 996G/1600G、モード、ART/RT、ランプ状態は `UNVERIFIED_AFTER_RESEARCH`。
- **リセット短縮**: 設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。1600G側は進捗引継ぎ。
- **モード**: 4モード存在は確認。設定変更時開始モード/振り分けは30Φ固有資料で `UNVERIFIED_AFTER_RESEARCH`。25Φの高確スタートは自動転記しない。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵**: **1600G第2天井進捗が設定変更でも消えない**。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、パトランプ等は `UNVERIFIED_AFTER_RESEARCH`。2009/2021/2026年の別南国シリーズ情報は除外。
- **公開朝一数値**: 設定変更時モード振分、朝一当選率、恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **SECOND_CEILING_1600G_CARRYOVER_CONFIRMED_FIRST_CEILING_MODE_POWER_CYCLE_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### 南国育ちスペシャル-30
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0130/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/0S0130/genre/201/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5948`
- パチビー: `https://www.pachibee.jp/machines/index/210060003`
- パチビー2010-06導入スケジュール: `https://www.pachibee.jp/machines/schedule/2010-06`

## 次回再開地点

1. **recordCount 483 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。パチビー同日群で未処理候補: **コウヘイ最凶伝 -地獄の閻魔覚醒の刻- / サンサンオアシス キュイーンVer. / メタルスラッグSV-001 / ガメラ / ニューパルサーV2 / マジックライアン / とんでも戦士ムテキング**。各repo重複を確認し、最古未処理を次に追加する。
3. **ゴッドハンターV**はK-Naviが2010-06-07、パチビー月間スケジュールが2010-06-08で日付競合。6/7同日群を閉じる前後で別系統資料を追加照合し、推測せずCONFLICT/定義差を判定する。
4. 30Φ「南国育ちスペシャル-30」の通常時50枚ベース、996G第1天井の設定変更時処理、設定変更時モード、高確、電源OFF→ON、変更判別は追加探索余地あり。ただし新規収集を止めない。
5. 競合/定義差は平均化せず保持。2009年「南国育ち30」、2021年「南国育ち-30」、2026年「L南国育ち SPECIAL」のreset情報を2010年機へ絶対に転記しない。
