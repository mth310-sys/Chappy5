# スパイダーマン2

machineName: スパイダーマン2
manufacturer: サミー
releaseDate: 2006-10（業界記事は10月中旬納品開始予定）
generation: 5号機初期
systemType: ボーナス + RT / パンク回避型・技術介入

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 99.8% |
| 3 | 102.8% |
| 4 | 107.3% |
| 5 | 111.9% |
| 6 | 117.3% |

信頼度: ANALYSIS_HIGH（P-WORLD。設定6 117.3%は後年回顧資料でも一致）

## initialHitBySetting

| 設定 | BIG | MID | 合算 |
|---:|---:|---:|---:|
| 1 | 1/585 | 1/862 | 1/349 |
| 2 | 1/546 | 1/780 | 1/321 |
| 3 | 1/489 | 1/799 | 1/303 |
| 4 | 1/443 | 1/712 | 1/273 |
| 5 | 1/400 | 1/655 | 1/248 |
| 6 | 1/356 | 1/607 | 1/224 |

信頼度: ANALYSIS_HIGH（P-WORLD、合算レンジは2006年当時業界記事とも一致）

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

## netIncrease
RT純増: 約+0.4枚/G。
- BIG後: 最大150G
- MID後: 最大50G
- 終了条件: 規定G消化 / ボーナス当選 / クモ役入賞
- クモ役は技術介入で入賞回避可能

信頼度: ANALYSIS_HIGH

## basicPayout
- BIG: 純増約300枚（当時業界記事では最大312枚表記）
- MID: 純増約220枚（当時業界記事では最大232枚表記）

実獲得と最大獲得表現を混同しない。

## modeSpecificMinimumData
- 5号機RT機
- ボーナス後は必ずRT
- RTパンク役を目押しで回避可能
- MID中に獲得枚数アップ手順あり
- 技術介入性が機械割/実績に影響するため、将来の技術介入系物差し候補
- 通常時ゲーム数到達型の天井は今回の再探索でも確認できない。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にBIG後最大150G / MID後最大50GのRT残G、内部RT状態、クモ役パンク回避状態がどの初期状態へ移るかを示す本機固有の直接資料を回収できず。一般的5号機RT挙動から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に前日RT残G・内部RT状態をそのまま維持するか、本機固有の直接記述を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のRT残G・内部RT状態・表示状態の復帰仕様を本機固有資料で確定できず。

gameCounterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED。通常ゲーム数到達型天井は確認できない。なおRTの最大150G/50G残数は天井カウンタとは別物で、設定変更/据え置き/電断時の扱いは上記の通りUNVERIFIED。

ceilingAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED。設定変更後短縮天井・朝一専用天井は確認できず。

modeAfterReset: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED。通常時のゲーム数解除モード/天国モード等は確認されない。RT内部状態の設定変更処理はstateAfterResetでUNVERIFIED管理。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT中に設定変更された場合のRT継続/終了、残G初期化、通常状態への復帰を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用RT、短縮天井、朝一当選優遇等は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更によるRT消滅等は直接資料未回収のため断定しない。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、液晶、RT挙動から設定変更/据え置きを判別する本機固有確定資料を確認できず。

numericResetData:
  normalBigAfterRtMaxGames: 150G
  normalMidAfterRtMaxGames: 50G
  rtNetIncrease: about_0.4_coins_per_game
  resetRtRemainingGames: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED
  morningBenefitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: RESEARCH_PASS_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_RT_STATE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `スパイダーマン2 / スパイダーマン2G / Sammy / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 150G / 50G / 残りゲーム / クモ役 / パンク回避 / ガックン / 天井` を組み替えて再探索。
- 2006年当時グリーンべると、P-WORLD、旧パチマガスロマガ現存ページ、後年回顧、実機解説系を横断。
- 直接確認できたのは「全ボーナス後RT」「BIG後最大150G / MID後最大50G」「規定G・ボーナス・クモ役入賞で終了」「クモ役は回避可能」まで。設定変更/据え置き/単純電断の処理は本文を確定できなかったため推測しない。

## sources
取得日: 2026-09-03
1. グリーンべると「人気映画『スパイダーマン2』がパチスロで登場」 — https://web-greenbelt.jp/00004856/ — 5号機、10月中旬納品予定、BIG最大312枚、MB最大232枚、BIG後150G/MB後50G RT、合算1/349〜1/224 — reliability: INDUSTRY
2. P-WORLD「スパイダーマン2」 — https://www.p-world.co.jp/machine/database/4367 — 型式名スパイダーマン2G、2006年10月導入、設定別BIG/MID/合算/機械割、RT約+0.4枚/G、BIG約300枚/MID約220枚 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「スパイダーマン2G 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/101/a.php — ボーナス後必ずRT、規定G/ボーナス成立/クモ入賞でRT終了、クモ回避手順 — reliability: OLD_ANALYSIS_HIGH
4. パチマガスロマガ「スパイダーマン2G INDEX」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/101/sammy_slot_101.php — 攻め時・ヤメ時、RT消化手順、設定推測等の本機解析導線 — reliability: OLD_ANALYSIS_HIGH
5. 2006年特集・思い出年表 — https://www.dorubako.biz/year/2006.html — 設定6機械割117.3%、BIG約300枚/MID約220〜230枚、ボーナス後RTの回顧照合 — reliability: ANALYSIS_SINGLE
6. パチスロスパイダーマン2実機解説 — https://www.mb.ccnw.ne.jp/seven-peace.com/a-na/sa/supaida-man2/supaida-.html — RT中クモ役告知/回避手順の補助照合 — reliability: RETROSPECTIVE_SINGLE

## missingFields
- 50枚あたりゲーム数
- 設定別機械割の当時一次資料照合
- 設定変更時のRT残G/内部RT状態
- 据え置き時のRT残G/内部RT状態
- 電源OFF→ON時のRT残G/内部RT状態
- ガックン/初期出目/ランプ等による変更判別
- 朝一専用恩恵/不利の有無を直接示す資料

## conflicts
- BIG/MID獲得は当時業界記事の「最大312/232枚」とP-WORLDの「純増約300/220枚」が併存。定義差として保持し、平均しない。
