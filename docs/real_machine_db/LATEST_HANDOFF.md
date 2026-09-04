# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **558**
- latestMachineAdded: **残機尽きるまで私は戦う**（トリビー / 2011-03-07主値、2011-03-06納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-03-07_zanki-tsukirumade-watashiwa-tatakau.md`
- chronologicalFrontier: **2011-03-07**
- frontierLatestExactDateMachine: **残機尽きるまで私は戦う**（トリビー / 2011-03-07）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、557レコード「パチスロ創聖のアクエリオン」を再取得して開始。
- 開始時正本は **recordCount 557 / chronologicalFrontier 2011-03-07**。会話履歴の旧地点ではなくGitHub最新mainを正とした。
- LATEST_HANDOFF由来の2011-03-07残存候補「テンションブースター」「残機尽きるまで私は戦う」「パチスロ『モンキーターン』」をrepo突合し、3機とも検索上未登録を確認。
- 本機「残機尽きるまで私は戦う」は当時資料で2011-03-07ホール導入、業界一次記事で2011-03-06納品開始予定を確認。日付定義を分離して558件目として追加。

## 今回追加 — 558 残機尽きるまで私は戦う

- メーカー: **トリビー**
- 型式表記: **残機尽きるまで私は戦うS**（業界記事）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 5号機 / A+ART / REG主体リアルボーナス + ナビ回数管理ART
- 導入主値: **2011-03-07**
- 納品開始予定: **2011-03-06**
- 機械割: **97.3 / 98.7 / 100.1 / 102.4 / 106.7 / 109.3%**
- ボーナス合算: **全設定共通 約1/327**（当時業界資料）
- ART初当たり単独: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART「戦いは続く」: **約+1.9枚/G**、ベルナビ回数管理、ボーナス後100%突入
- EXTRA BONUS / ATTACK BONUS: **約42枚**
- ART終了後CZ「リベンジゾーン」: リプレイを除く最大32G、残機ストック分だけ再挑戦しボス撃破でART再突入
- 通常時内部状態: **低確 / 高確 / 超高確**

### resetBehavior v0.7 — 残機尽きるまで私は戦う

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ「朝イチ・設定変更」、必勝本「設定変更&天井情報」の専用解析項目存在までは確認したが具体本文値を回収できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態、ARTナビ/残機、CZ、天井進捗を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の保持を直接確定できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。天井解析項目は存在するが通常天井の正確値・起算点・恩恵も取得可能本文から確定できず。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常時に低/高/超高確があることは確認済みだが変更時の再抽選/引継ぎ・振り分け不明。
- `resetBenefits` / `resetPenalties`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/据え置き判別/朝一/電源OFF ONまで表記・検索語変更後も本機固有根拠なし。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `numericResetData`: **NONE_RECOVERED_AFTER_RESEARCH**。

## 主要出典 — 558（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00001800/`
- 娯楽産業: `https://www.goraku-sangyo.com/%E3%83%88%E3%83%AA%E3%83%93%E3%83%BC%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%AE%8B%E6%A9%9F%E5%B0%BD%E3%81%8D%E3%82%8B%E3%81%BE%E3%81%A7%E7%A7%81%E3%81%AF/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6245`
- 5号機クロニクル: `https://5goki.com/trivy`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/15/trivy_slot_15.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1782`
- パチンコ萬情報屋 当時記事: `https://plaza.rakuten.co.jp/pachiwin/diaryall/`

## conflicts / 注意

- **release chronologyは競合平均せず定義分離**: 2011-03-06 = 納品開始予定、2011-03-07 = ホール導入。
- 機械割はP-WORLDと5号機クロニクルで一致。
- ボーナス合算1/327は当時業界資料で設定共通。4種類個別確率は未回収のため推測分解しない。
- ボーナス後100%ARTでもCZからART再突入があるため、1/327をART初当たり単独へ転記しない。
- 天井/リセット専用解析ページの存在だけを根拠に具体値を作らない。

## 今回のGitHub更新

- 558追加: `docs/real_machine_db/machines/2011-03-07_zanki-tsukirumade-watashiwa-tatakau.md`
- 558 machine record commit: `f9ebefe656677c18b1e547fc3e13ff5fd53f14a0`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 558 / chronologicalFrontier 2011-03-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 558レコードを再取得。
2. **2011-03-07同日群を継続監査**。残存未登録候補のうちHANDOFF順で **北電子「テンションブースター」**を最優先とする。K-Naviは2011-03-07ホール導入、HAZUSEは2011-03-04導入開始のため、日付定義・ソース競合を再確認して平均化しない。
3. 次候補は **山佐「パチスロ『モンキーターン』」**。パチビー/K-Naviは2011-03-07、HAZUSEは2011-03-04、グリーンべるとは3月上旬納品予定。日付定義と競合を分離する。
4. 3/7同日群を閉じてから3/8以降へ進む。発表日/納品日/ホール導入日を混同しない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
