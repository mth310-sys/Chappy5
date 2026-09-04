# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **560**
- latestMachineAdded: **パチスロ「モンキーターン」**（山佐 / 2011-03-07主値、HAZUSE 2011-03-04、当時記事2011-03-06）
- latestRecord: `docs/real_machine_db/machines/2011-03-07_monkey-turn.md`
- chronologicalFrontier: **2011-03-07**
- frontierLatestExactDateMachine: **パチスロ「モンキーターン」**（山佐 / 2011-03-07）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、559レコード「テンションブースター」を再取得して開始。
- 開始時正本は **recordCount 559 / chronologicalFrontier 2011-03-07**。会話履歴の555件地点ではなくGitHub最新mainを正とした。
- LATEST_HANDOFF最優先候補 **山佐「パチスロ『モンキーターン』」**をrepo突合し、未登録を確認して560件目として追加。
- K-Navi/パチビー=2011-03-07、HAZUSE=2011-03-04、当時記事=2011-03-06は平均せずSOURCE_DATE_DIFFERENCEとして保持。

## 今回追加 — 560 パチスロ「モンキーターン」

- メーカー: **山佐**
- 型式名: **モンキーターン**
- 検定番号: **0S1073**
- 5号機 / ART専用 / ボーナス非搭載 / 規定ゲーム数モード + 自力CZ
- 導入主値: **2011-03-07**
- 別導入資料: **2011-03-04**（HAZUSE）、**2011-03-06**（当時記事）
- SG RUSH初当たり: **1/281.0 → 1/188.2〜1/188.3**
- ART「SG RUSH」: **50G+α、約+2.0枚/G**
- モード別最大G: **通常A 1280G / 通常B 768G / 天国128G / 超天国32G**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。シリーズ後継機の値を流用せず、小役からも逆算していない。

### 機械割 CONFLICT

平均せず以下を保存。

- 系列A: **96.9 / 98.4 / 100.5 / 103.7 / 107.8 / 112.0%**
- 系列B: **97.9 / 98.4 / 100.5 / 105.1 / 108.2 / 112.0%**
- 後年系列: **97.8 / 98.4 / 100.5 / 105.1 / 108.2 / 112.0%**

設定1/4/5に明確な資料差があるため `CONFLICT`。

### resetBehavior v0.7 — モンキーターン

- `settingChangeBehavior`: **CONFIRMED_MODE_RESELECTION_AND_ART_GAME_RESET**。設定変更でART発動規定ゲーム数がリセットされ、通常A/B/天国へ再抽選。設定変更から超天国へは移行しない。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: **NO_FIXED_RESET_SHORTENED_CEILING; MODE_DEPENDENT**。初代専用の固定短縮天井は確認なし。再抽選モード次第で天国128G、通常B768G、通常A1280G。
- `modeAfterReset`: **CONFIRMED_WITH_NUMERIC_TABLE**。
  - 設定1〜3: 通常A **37.50%** / 通常B **37.50%** / 天国 **25.00%**
  - 設定4〜6: 通常A **33.33%** / 通常B **33.33%** / 天国 **33.34%**
  - 超天国: **0%（設定変更から非選択）**
- `resetBenefits`: 設定1〜3で**25%**、設定4〜6で**約33.34%**の天国移行。天国なら128G以内のART発動域。
- `resetPenalties`: 前日のART発動規定ゲーム数進捗が設定変更で消失し、深ハマり宵越し価値を失う。
- `carryOverBehavior`: **PARTIAL_AFTER_RESEARCH**。当時実戦資料では前日ゲーム数/朝一ゾーン挙動を据え置き推測に使う運用を確認したが、据え置き時の全内部状態を列挙する直接仕様表は未回収。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の規定G/モード/CZ状態保持を初代固有資料で確定できず。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。CZ高確等の短期内部状態は直接根拠未回収。
- `resetDetection`: **ZONE_BEHAVIOR_BASED_INFERENCE_CONFIRMED / GACKUN_UNVERIFIED**。朝一128Gやゾーン挙動による変更/据え置き推測は当時資料あり。ただし確定判別ではない。ガックン/初期出目/ランプは未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

## 主要出典 — 560（取得日 2026-09-04）

- K-Navi 機種ページ: `https://p-kn.com/slot/1364/`
- K-Navi 設定変更後モード移行率: `https://p-kn.com/slot/1364/29944/`
- K-Navi 機械割: `https://p-kn.com/slot/1364/29717/`
- pacnk: `https://pacnk.com/slot/2011/monkeyturn/top.php`
- パチビー: `https://www.pachibee.jp/machines/about/212050004`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S1073/`
- 2-9伝説: `https://29den.com/monkeyturn/`
- みんスロ: `https://minslo.com/%E3%83%A2%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%B3/`
- パチスロわっしょい: `https://www.pachislowasshoi.jp/smp/item/yamasa-slot0015.html`
- 当時記事: `https://blog.livedoor.jp/pachisurohakase/archives/2375895.html`

## conflicts / 注意

- release chronology: **SOURCE_DATE_DIFFERENCE**。2011-03-04 / 03-06 / 03-07を平均しない。
- payoutRateBySetting: **CONFLICT**。設定1/4/5を平均しない。
- ART純増は「約2.0枚/G」「2.0枚以上/G」の表現差があるため精密固定値化しない。
- settingChangeのゲーム数リセットと数値付きモード再抽選は直接資料あり。powerCycleや短期内部状態は推測補完しない。

## 今回のGitHub更新

- 560追加: `docs/real_machine_db/machines/2011-03-07_monkey-turn.md`
- 560 machine record commit: `9afd41b0f9ad778c63660fe0815d50c89c8fa74c`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 560 / chronologicalFrontier 2011-03-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 560レコードを再取得。
2. K-Navi 2011年3月カレンダー上、2011-03-07群は「創聖のアクエリオン」「ぼのぼの～スウィートver.～」「テンションブースター」「残機尽きるまで私は戦う」「モンキーターン」の5機種。既存登録突合上は今回で同日群を一旦閉じる。
3. **2011-03-08〜03-21境界を最終監査**。K-Navi全国導入カレンダーだけでなく、HAZUSEの03/11・03/18等の表記が独立機種なのか、03/22全国導入群の先行/地域/定義差なのかをメーカー別一覧・当時記事で切り分け、未登録を飛ばさない。
4. 境界に別機種がなければ **2011-03-22群「G-SPIN」「GETだ!BILLY」「アイムジャグラーAPEX」**をrepo突合し、最古未処理から順に追加。
5. その後の明確なアンカーは **2011-03-28「ヱヴァンゲリヲン～真実の翼～」**。3/22同日群を閉じてから進む。
6. 遡及QAは怪胴王直後の最初のresetBehavior欠損レコードから継続。PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
