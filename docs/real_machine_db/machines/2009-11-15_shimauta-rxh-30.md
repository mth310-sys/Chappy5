# 島唄RXH-30

machineName: 島唄RXH-30
manufacturer: オリンピア
formalModelName: 島唄RXH-30
approvalNumber: 9S0632
releaseDate: CONFLICT — 2009-11-15 / 2010-01
generation: 5号機
systemType: ボーナス+ART / 30Φ
coreStatus: PARTIAL_WITH_CONFLICTS

## chronologyNote

- 最新main 443件 / chronologicalFrontier 2010-01-12から、2010-01-13〜01-24境界の月精度候補として再監査。
- P-WORLDは型式 `島唄RXH-30`、検定9S0632、30Φ、導入開始 **2010年1月** と掲載。
- 一方、2009年11月の回顧資料は同型式を「2009年11月リリース」とし、中古流通系履歴には **2009-11-15** の日付が残る。
- 25Φの既存 `島唄R`（検定9S0569）とは別型式であり、repo検索でも未登録だったため独立レコード化。
- 導入日定義/地域差の可能性を解消できないため、releaseDateは `CONFLICT` のまま保持。遡及追加扱いのため chronologicalFrontier は2010-01-12から進めない。

## payoutRateBySetting

### HAZUSE系列
- 設定1: 95.6%
- 設定2: 98.2%
- 設定3: 101.3%
- 設定4: 104.7%
- 設定5: 107.5%
- 設定6: 110.2%

### 別回顧系列
- 96.0 / 98.5 / 101.2 / 104.1 / 106.6 / 109.2% 系列
- 5号機クロニクルでは 95.8 / 98.5 / 101.4 / 104.1 / 107.3 / 109.2% 系列も確認。

**CONFLICT**。平均せず併記する。HAZUSE系列が25Φ `島唄R` と同値である点も、30Φ固有値か共通値かの再確認余地として残す。

confidence: CONFLICT

## initialHitBySetting

### HAZUSE系列
- BIG: 1/443, 1/434, 1/426, 1/417, 1/412, 1/407
- REG: 1/570, 1/560, 1/551, 1/537, 1/524, 1/512
- 合成: 1/249, 1/245, 1/240, 1/235, 1/231, 1/227

### P-WORLD系列
- BIG: 1/443, 1/431, 1/420, 1/410, 1/400, 1/362
- REG: 1/570, 1/551, 1/533, 1/516, 1/500, 1/443
- 合成: 1/249, 1/242, 1/235, 1/228, 1/222, 1/199

**CONFLICT**。設定1はほぼ一致するが高設定側の差が大きいため、別スペック/データ混入を疑いつつ双方を保持する。

confidence: CONFLICT

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

`島唄RXH-30 / 9S0632 / 30Φ / 50枚 / 1000円 / ベース / コイン持ち / 平均G数` を組み替え、HAZUSE、P-WORLD、回顧DB、旧資料を横断したが直接値を確定できなかった。25Φ島唄Rの値は自動転記しない。

confidence: UNVERIFIED

## netIncrease

- ART「フグRUSH」: **1セット35G、約+1.5枚/G**（HAZUSE）
- 1ストックごとに継続率を持つループ型。継続率は8段階とされるが、物差し用途では詳細振り分けは収集対象外。

confidence: ANALYSIS_HIGH

## basicPayout

HAZUSE配当表の払い出し終了条件:
- SUPER BIG: 441枚を超える払い出しで終了
- BIG: 297枚を超える払い出しで終了
- REG: 63枚を超える払い出しで終了

後年回顧にBIG約252枚 / REG約104枚という実獲得目安もあるが、HAZUSEの本機35G・+1.5枚/G記述と同回顧ページのART50G・+1.2枚/G記述が競合するため、実獲得目安は `LOW_CONFIDENCE_RETROSPECTIVE` として分離し、主値化しない。

confidence: ANALYSIS_HIGH_FOR_PAYOUT_CONDITIONS / ANALYSIS_SINGLE_FOR_NET_ESTIMATES

## modeSpecificMinimumData

- 30Φのボーナス+ART機。
- ART「フグRUSH」: 35G/セット、約+1.5枚/G。
- ARTストック機能あり。ART中ボーナスで1個以上を上乗せするとHAZUSEが説明。
- 通常ゲーム **1200G** ハマリで、次回ボーナスまで継続する天井ARTへ突入。
- ボーナス後のART非突入が **9回連続**すると天井状態となり、次回ボーナス後に **ART2個以上**確定。
- 通常時に複数内部モードが存在することは当時掲示板/解析言及から確認できるが、全移行表は物差し目的外のため収集しない。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 9S0632 / 島唄RXH-30`で当時解析・HAZUSE・P-WORLD・回顧資料を再探索したが、設定変更時の内部モード/ARTストック/天井カウンタ処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。`据え置き / 宵越し / 1200G / 9回天井`まで広げたが、1200G進捗やART非突入回数の据え置き引継ぎを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONと設定変更との差を示す直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。1200G天井および9回連続ART非突入カウンタの設定変更時処理は未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井1200Gと9回非突入天井は確認済みだが、設定変更時の短縮/再セット数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。内部モードの設定変更時再抽選/引継ぎ、朝一専用モードは直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック・ART残状態・内部状態の設定変更時処理は未確定。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの確定恩恵/短縮数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの確定不利要素は確認できず。

resetDetection: **CONFLICT_LOW_CONFIDENCE_COMMUNITY_ONLY**。P-WORLD当時掲示板で、設定変更/確認時にパトランプが「回らない」とする投稿と「回る」とする反論が競合。公式/解析根拠を得られないため変更判別手段として採用せず、CONFLICTのみ記録する。

numericResetData:
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: EXTENSIVE_RESEARCH_WITH_LOW_CONFIDENCE_DETECTION_CONFLICT

## conflicts

1. releaseDate: 2009-11-15 / 2009-11リリース vs P-WORLD 2010-01導入開始。
2. 機械割: HAZUSE 95.6〜110.2% vs 他回顧 96.0〜109.2% / 95.8〜109.2%。
3. BIG/REG確率: HAZUSE系列 vs P-WORLD系列で高設定側が大きく異なる。
4. ART基本性能: HAZUSEはフグRUSH35G・約+1.5枚/G。後年5号機クロニクルは50G・約+1.2枚/Gで競合し、後者は本機固有値として主採用しない。
5. resetDetection: 当時P-WORLD掲示板で設定変更時パトランプ挙動の証言が相互矛盾。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact release date / first nationwide hall date: CONFLICT
- authoritative payoutRateBySetting: CONFLICT
- authoritative initialHitBySetting: CONFLICT
- resetBehavior except advantageousSectionReset: UNVERIFIED/NONE_CONFIRMED/LOW_CONFIDENCE_CONFLICT

## sources

取得日: 2026-09-03

1. HAZUSE 島唄RXH-30 — https://hazuse.com/machine/pachislot/9S0632/ — 型式9S0632、設定別BIG/REG/合算、PAY OUT、配当条件、フグRUSH35G・約+1.5枚/G、1200G天井、9回非突入天井 — reliability: ANALYSIS_HIGH
2. P-WORLD 島唄RXH-30 — https://www.p-world.co.jp/machine/database/5803 — 5号機ART/30Φ、検定9S0632、型式名、導入開始2010年1月、別系列BIG/REG/合算 — reliability: INDUSTRY_DATABASE
3. pachinko’s blog 島唄R（&-30） — https://pachinko.hatenablog.jp/entry/2009/11/shimauta-R — 型式RXH-30、2009年11月リリース、機械割/ボーナス確率の別系列 — reliability: RETROSPECTIVE_SINGLE
4. 中古機相場.com オリンピア相場履歴 — https://www.p-souba.com/2_61_25.htm — 島唄RXH-30に2009年11月15日の履歴日付 — reliability: MARKET_DATABASE_DATE_CLUE
5. 5号機クロニクル 平和＆オリンピア一覧 — https://5goki.com/heiwa-olympia — 2010年1月、機械割95.8〜109.2%、BIG約252枚/REG約104枚の回顧値。ただしART50G・約+1.2枚/GなどHAZUSEと競合するため限定採用 — reliability: RETROSPECTIVE_DATABASE_WITH_CONFLICT
6. P-WORLD 島唄シリーズ掲示板 — https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p5734 — 2010-05〜2011-03の設定変更時パトランプ挙動について相反するユーザー証言 — reliability: COMMUNITY_LOW
