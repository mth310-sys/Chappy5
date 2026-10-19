# スロ原人

machineName: スロ原人
manufacturer: アビリット（現コナミアミューズメント系）
releaseDate: 2006-10（当時業界記事: 納期2006-10-01から）
generation: 5号機初期
systemType: ボーナス + RT / 現金機仕様

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.72% |
| 2 | 100.95% |
| 5 | 104.31% |
| 6 | 107.22% |

信頼度: ANALYSIS_HIGH（パチマガスロマガ。pacnk・5号機クロニクルも概ね同レンジ）

補足: 5号機クロニクルは4段階目を設定4と表記するが、当時業界記事は現金機を4段階設定、パチマガスロマガは設定1/2/5/6としているため、本DBでは1/2/5/6を採用し、表記差をconflictsに保持する。

## initialHitBySetting

| 設定 | BIG | 原人ラッシュ（CT/REG） |
|---:|---:|---:|
| 1 | 1/321.25 | 1/504.12 |
| 2 | 1/303.41 | 1/451.97 |
| 5 | 1/286.18 | 1/428.34 |
| 6 | 1/275.36 | 1/422.81 |

信頼度: ANALYSIS_HIGH（パチマガスロマガ、pacnkでほぼ一致）

## baseGamesPer50

1000円（50枚）あたり:
- 設定1: 36.49G
- 設定2: 36.68G
- 設定5: 37.25G
- 設定6: 38.37G

信頼度: ANALYSIS_HIGH（パチマガスロマガ）

## netIncrease

RT搭載。
- BIG後: 50G
- 原人ラッシュ後: 20G
- RT中リプレイ確率: 1/2.00

1Gあたり純増枚数: UNVERIFIED

## basicPayout

- BIG: 345枚を超える払い出しで終了 / 実純増約283枚
- 原人ラッシュ: 135枚を超える払い出しで終了 / 実純増約120枚

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- アビリット初の5号機
- 現金機仕様は4段階設定
- 小役とボーナスの同時抽選
- BIG後50G / 原人ラッシュ後20GのRT
- CS仕様とは設定構成・確率が異なるため別スペックとして扱う

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にBIG後50G / 原人ラッシュ後20GのRT残G・内部RT状態が継続、消滅、初期化のいずれになるかを示す本機固有の直接資料を回収できず。一般的な5号機RT挙動から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に前日RT残G・内部RT状態をそのまま維持するか、本機固有の直接記述を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のRT残G・内部RT状態・表示状態の復帰仕様を本機固有資料で確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。今回確認した当時業界記事・旧解析ページでは通常ゲーム数到達型天井の確定記述を回収できず、設定変更時にクリア/保持される通常ゲーム数カウンタの有無も断定しない。なおBIG後50G / 原人ラッシュ後20GのRT残数は通常天井カウンタとは別管理する。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後短縮天井・朝一専用天井を示す本機固有確定資料を回収できず。

modeAfterReset: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED。通常時のゲーム数解除モード/天国モード等は確認されない。RT内部状態の設定変更処理はstateAfterResetでUNVERIFIED管理。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT中に設定変更された場合のRT継続/終了、残G初期化、通常状態への復帰を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用RT、短縮天井、朝一当選優遇等は今回の再探索で確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更によるRT消滅等は直接資料未回収のため断定しない。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、液晶、RT挙動から設定変更/据え置きを判別する本機固有確定資料を確認できず。

numericResetData:
  normalBigAfterRtGames: 50G
  normalGanjinRushAfterRtGames: 20G
  rtReplayProbability: 1/2.00
  resetRtRemainingGames: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  morningBenefitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_RT_STRUCTURE_CONFIRMED_RESET_HANDLING_UNVERIFIED

resetBehaviorResearchNote:
- `スロ原人 / アビリット / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 50G / 20G / 残りゲーム / 天井 / ガックン` を組み替えて再探索。
- 2006年当時グリーンべると/P-WORLD業界ニュース、旧パチマガスロマガ現存ページ、旧DB・回顧系を横断。
- 直接確認できたのは「同社初5号機」「BIG後50G RT」「原人ラッシュ後20G RT」「RT中リプレイ1/2.00」まで。設定変更/据え置き/単純電断のRT処理、朝一恩恵/不利、変更判別は本文を確定できなかったため推測しない。

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース「アビリット、業界初のカードパチスロ機を発表」 — https://news.p-world.co.jp/articles/1851/greenbelt — 同社初5号機、現金機4段階設定、BB/CT、払い出し終了条件、RTゲーム数、納期10月1日 — reliability: INDUSTRY
2. パチマガスロマガ「スロ原人 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/12/a.php — 設定1/2/5/6、BIG/REG純増、RT — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「スロ原人 ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/12/h.php — 設定別BIG/REG/PAYOUT — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「スロ原人 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/12/c.php — 1000円あたりゲーム数、RT中リプレイ確率 — reliability: ANALYSIS_HIGH
5. pacnk「スロ原人 設定判別ツール」 — https://pacnk.com/slot/tools/sh_surogenjin.html — 設定1/2/5/6のBIG/原人ラッシュ/PAYOUT照合 — reliability: ANALYSIS_SINGLE
6. 5号機クロニクル「コナミアミューズメント系5号機一覧」 — https://5goki.com/konami — 2006/10、設定別確率・機械割の補助照合 — reliability: ANALYSIS_SINGLE

## missingFields

- RTの1Gあたり純増枚数
- 設定変更時のRT残G/内部RT状態
- 据え置き時のRT残G/内部RT状態
- 電源OFF→ON時のRT残G/内部RT状態
- 通常ゲーム数到達型天井の有無を直接確定できる資料
- ガックン/初期出目/ランプ等による変更判別
- 朝一専用恩恵/不利の有無を直接示す資料

## conflicts

- 5号機クロニクルは4段階設定を1/2/4/6と表記する一方、当時業界記事は現金機4段階、パチマガスロマガとpacnkは1/2/5/6。設定番号は当時攻略資料2系統が一致する1/2/5/6を採用。
- 機械割は資料ごとに小差あり（例: 設定1 97.1〜97.72%、設定6 107.22〜107.6%）。平均化せず、主表はパチマガスロマガ値。
