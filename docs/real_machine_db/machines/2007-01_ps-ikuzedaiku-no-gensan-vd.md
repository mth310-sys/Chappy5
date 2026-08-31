# PS行くぜ大工の源さんVD

machineName: PS行くぜ大工の源さんVD
manufacturer: 三洋物産
releaseDate: 2007-01
generation: 5号機初期
systemType: ボーナス+RT

## payoutRateBySetting

UNVERIFIED。

5号機クロニクルも設定1〜6を「不明」としており、P-WORLDもBIG確率を「メーカー未発表」としている。機種名表記揺れ、メーカー名、シリーズ名、機械割/出玉率/PAYOUT等で再探索したが、設定別機械割を確定できる高信頼資料を確認できなかった。

## initialHitBySetting

UNVERIFIED。

P-WORLDはBIG確率をメーカー未発表として掲載。設定別BIG/REG/合算を確定できる当時解析表は今回確認できなかった。

## baseGamesPer50

UNVERIFIED。

「50枚」「1000円」「ベース」「コイン持ち」「プレイ数」等へ検索語を変え、P-WORLD、古いDB、後年回顧資料を横断したが比較可能な数値を確定できなかった。

## netIncrease

- P-WORLDは本機を5号機・RTタイプとして登録。
- 掲示板当時投稿には複数ボーナス後に60〜120G程度のRTが付く旨の記述があるが、ユーザー投稿のため性能コアの確定値には採用しない。
- RTゲーム数/純増: UNVERIFIED。

信頼度: ANALYSIS_SINGLE（RTタイプ分類のみ）

## basicPayout

UNVERIFIED。

P-WORLD掲示板の2007年当時投稿には赤7系ボーナスで264枚/186枚/99枚等の記述があるが、一次・業界・解析資料で照合できていないため正式データには採用しない。

## modeSpecificMinimumData

- 三洋物産の5号機。
- P-WORLD: 導入開始2007年1月、タイプ5号機/RT。
- 5号機クロニクル: 2007年1月導入。
- スロリスクタイム: A+RT、三洋物産、2007年1月として分類。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: UNVERIFIED
- carryOverBehavior: UNVERIFIED
- powerCycleBehavior: UNVERIFIED
- gameCounterReset: 天井/内部ゲーム数管理の高信頼情報を確認できず
- ceilingAfterReset: UNVERIFIED
- modeAfterReset: 朝一専用モード/モード再抽選の公開情報を確認できず
- stateAfterReset: RT残存時の設定変更/電源OFF→ON処理を高信頼資料で確認できず
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン等の設定変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### 欠損判定前の再探索メモ

以下を組み合わせ、表記揺れ・シリーズ名・メーカー名を変えて横断した。

- 「PS行くぜ大工の源さんVD」「行くぜ大工の源さんVD」「大工の源さん パチスロ 5号機」
- 「設定別」「機械割」「出玉率」「PAYOUT」「BIG確率」「REG確率」「ボーナス合算」
- 「50枚」「1000円」「ベース」「コイン持ち」「純増」「獲得枚数」「RT」
- 「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「ガックン」

P-WORLD、5号機クロニクル、2007年機種一覧、後年のシリーズ回顧資料等を確認したが、信頼できる性能表は見つからなかった。掲示板投稿の数値は参考痕跡としてのみ残し、DB確定値には使用しない。

## sources

取得日: 2026-08-31

1. P-WORLD — PS行くぜ大工の源さんVD
   - https://www.p-world.co.jp/machine/database/4489
   - 導入開始2007年1月、5号機/RT、BIG確率メーカー未発表
   - reliability: ANALYSIS_SINGLE
2. 5号機クロニクル — 三洋物産5号機全機種一覧
   - https://5goki.com/sanyo
   - 2007/1導入、設定別機械割は不明として掲載
   - reliability: ANALYSIS_SINGLE
3. スロリスクタイム — A+RT機一覧
   - https://pachisuro100.com/a-rt/
   - 行くぜ大工の源さんVD / 三洋物産 / 2007/1 / A+RTの分類照合
   - reliability: ANALYSIS_SINGLE
4. 2007年導入一覧
   - https://www.dorubako.biz/year/2007.html
   - 2007年1月機種として掲載
   - reliability: ANALYSIS_SINGLE

## missingFields

- payoutRateBySetting
- initialHitBySetting
- baseGamesPer50
- RTゲーム数/純増
- basicPayout
- resetBehavior具体値

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## conflicts

- 後年の一部回顧ページに2007年10月販売との記載がある一方、P-WORLD・5号機クロニクル・複数5号機一覧は2007年1月導入で一致する。現DBではホール導入時期として2007-01を採用し、10月表記は参考CONFLICTとして残す。
