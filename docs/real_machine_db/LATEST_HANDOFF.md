# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **580**
- latestMachineAdded: **リオスパ Rioの大温泉**（ネット / primary 2011-06-20、納品開始2011-06-19との日付定義差あり）
- latestRecord: `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- chronologicalFrontier: **2011-06-20**
- frontierLatestExactDateMachine: **リオスパ Rioの大温泉**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、579件目「鬼浜外伝 ハヤト疾風伝」を再取得して開始。
- `INDEX.md` は旧情報を含むため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-17同日群と06-18〜06-19境界を監査し、repo未登録の **リオスパ Rioの大温泉** を580件目として追加。
- 導入日は当時グリーンべると **2011-06-19納品開始予定** / K-Navi・アタリ7 **2011-06-20ホール導入開始/導入日**。定義差を平均せず保持し、主releaseDateはホール導入日2011-06-20を採用。

## 今回追加 — 580 リオスパ Rioの大温泉

- メーカー: **ネット**
- 型式名: **リオの大温泉3**
- 5号機 / **ノーマルA・ボーナス主体 + 7G演出用プチRT / 技術介入要素あり**
- PAYOUT: **97.0 / 98.5 / 100.0 / 103.0 / 106.0 / 110.0%**
- SBB/BB/Rio BONUS合成: **1/273 / 1/262 / 1/254 / 1/246 / 1/239 / 1/232**
- REG: **1/409 / 1/385 / 1/368 / 1/348 / 1/327 / 1/303**
- ボーナス合算: **1/163 / 1/156 / 1/150 / 1/144 / 1/138 / 1/131**
- SBB最大335枚 / BB最大311枚 / Rio BONUS最大327枚 / REG最大103枚。
- チャンスリプレイ入賞後に **7Gの演出用プチRT**。出玉増加ART/ATではないため、物差しコアの純増値はNOT_APPLICABLE。
- 50枚ベースは表記揺れ・型式・メーカー・シリーズ・50枚/1000円/ベース/コイン持ち等を変え、K-Navi、P-WORLD、旧パチマガスロマガ、当時/後年資料を横断したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。小役から独自逆算しない。
- 通常ゲーム数天井/規定ゲーム数当選/救済RTは複数資料と天井検索を横断しても本機固有の搭載情報を確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior v0.7 — 580

- `settingChangeBehavior`: 本機固有の設定変更時の液晶/出目/俺スロ等の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。一般的ノーマル機挙動から補完しない。
- `carryOverBehavior`: 通常ゲーム数天井や長期ゲーム数モードは確認されないため、その種の宵越し狙い要素は確認なし。表示/俺スロ等の据え置き挙動は未確定。
- `powerCycleBehavior`: 単純電源OFF→ON時の液晶、履歴、出目等は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_TO_CEILING_AFTER_RESEARCH**。通常ゲーム数天井/規定ゲーム数当選機能を確認できず、天井進捗CLEAR/RETAIN対象の内部G数カウンタは確認なし。
- `ceilingAfterReset`: **NOT_APPLICABLE; NO_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井も確認なし。
- `modeAfterReset`: 長期ゲーム数モード/天国等は確認されず **NOT_APPLICABLE_TO_LONG_TERM_HIT_MODE_AFTER_RESEARCH**。7GプチRTはチャンスリプレイ契機の短期演出状態で朝一専用モードではない。
- `stateAfterReset`: 7GプチRT中の設定変更/電源断という境界挙動は直接資料未確定のため **UNVERIFIED_FOR_ACTIVE_7G_RT_EDGE_CASE**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: 短縮天井・朝一高確・専用モード・前日天井進捗消失等の主要な公開恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン、初期出目、液晶、ランプ、履歴表示等による本機固有の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一関連数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 主要出典 — 580（取得日 2026-09-04）

- グリーンべると「ネット、Rioシリーズ最新作は温泉が舞台！」2011-05-16
  - `https://web-greenbelt.jp/00002079/`
  - ネット、演出用RT搭載ノーマル、SBB335枚/BB311枚/RioB327枚/RB103枚、2011-06-19納品開始予定
- K-Navi「リオスパ Rioの大温泉」
  - `https://p-kn.com/slot/1420/`
  - 2011-06-20ホール導入開始、設定別SBB/BB/RioB合成・REG・合算・機械割
- K-Navi「プチRT」
  - `https://p-kn.com/slot/1420/31421/`
  - チャンスリプレイ入賞で7GプチRT、規定G消化で終了
- P-WORLD「リオスパ Rioの大温泉」
  - `https://www.p-world.co.jp/machine/database/6359`
  - 5号機ノーマル/技術介入、各ボーナス最大枚数、通常ゲーム構造
- パチマガスロマガ旧解析「基本システム」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/150/a.php`
  - ノーマル、7GプチRT、各ボーナス獲得性能
- パチマガスロマガ旧解析「ボーナス中の打ち方」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/150/e.php`
  - 技術介入手順、RioBのJAC構造
- アタリ7「リオスパ Rioの大温泉」
  - `https://www.atari7.com/slot/date1441265718.php`
  - 2011-06-20導入、設定別確率・機械割のクロスチェック
- 中一商事 中古実機DB
  - `https://www.nakaiti.com/html/Net009.html`
  - 型式名「リオの大温泉3」、5号機ノーマル、各ボーナス最大枚数

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に直接確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 580 / chronologicalFrontier 2011-06-20**。最新main README / mission / INDEX / LATEST_HANDOFF / 579・580レコードを再取得。
2. **2011-06-20同日群を最終監査**。最優先候補は **プロゴルファー猿**。2011-06-20 / 06-27の資料差候補があるため、導入/納品等の日付定義を切り分け、repo未登録を確認してから処理する。
3. 同日群を閉じた後、**2011-06-21〜06-25**の最古未登録機を監査。
4. 後続アンカーとして **ハネスロ林家一家（2011-06-26納品開始予定候補）**、**スカイラブ3（2011-06-27ホール導入候補）**を保持。ただし途中機種を飛ばさない。
5. 遡及QAは怪胴王直後のmachine pathを順序付きで確認し、既収集なら次へ、最初の欠損から補完する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
