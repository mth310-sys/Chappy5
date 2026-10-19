# 大山鳴動漢みちスロ!

machineName: 大山鳴動漢みちスロ!
manufacturer: WIN NET TECHNOLOGY
releaseDate: 2006-09
generation: 5号機初期
systemType: ボーナス + RT / 多種類BB

## payoutRateBySetting
1: 95.0%
2: 97.4%
3: 99.7%
4: 102.6%
5: 105.2%
6: 106.7%

reliability: ANALYSIS_MULTI_SOURCE_MATCH

## initialHitBySetting
UNVERIFIED_AFTER_RESEARCH

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

## netIncrease
2種類のRTを搭載。「みちのくチャンス」と呼ばれるRT機能を当時解析で確認。比較可能な純増/Gは未確定。

## basicPayout
最大純増BB: 416枚。ほかに出玉を伴わないBBを含む計6種類のBB構成が業界記事で確認できる。

## modeSpecificMinimumData
- 6種類のBB
- 2種類のRT
- 当時HAZUSEはRT「みちのくチャンス」、最大引き戻し率78.5%と記載。
- グリーンべるとによれば、最大純増416枚BBにはRTを絡めず、出玉のない2種類のBB終了時にRT発動する構成。
- 同時当選機能なし（当時HAZUSE）。
- 通常時小役確率は当時HAZUSEでスイカ1/100.8、チェリー1/72.8、リプレイ1/7.3、ベルは設定1〜3=1/8.6、設定4=1/8.5、設定5=1/8.4、設定6=1/8.2。

## resetBehavior
settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にRT「みちのくチャンス」残G/内部RT状態、ボーナス関連内部状態がどう処理されるか本機固有の直接資料を確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のRT残G/内部RT状態やその他状態の引継ぎを本機固有資料で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみ時のRT残G/内部状態処理を確定できず。
gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH。通常時ゲーム数天井を本機固有資料で確認できず、リセット時の天井カウンタ処理として確定可能な公開情報なし。
ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井/別天井を示す公開資料を確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のモード振り分けを示す本機固有資料を確認できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時/朝一専用状態を示す本機固有資料を確認できず。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、パネル/ランプ挙動等による本機固有の設定変更/据え置き判別条件を確定できず。
numericResetData:
  resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## sources
取得日: 2026-09-02
1. 5号機クロニクル ラスター/WIN系掲載 — https://5goki.com/luster — 2006年9月、設定別機械割 — reliability: ANALYSIS_SINGLE
2. グリーンべると「WIN社から完走RTタイプの5号機第2弾発表」 — https://web-greenbelt.jp/00004919/ — 前作として本機の6種類BB、2種類RT、最大純増416枚、出玉なし2BB終了時RT発動構成を説明 — reliability: INDUSTRY
3. HAZUSE「大山鳴動 漢みちスロ！～解析・機種情報(2版)」 — https://hazuse.com/i/data/sasuke/top.htm — 2006年9月、6種類BB、RT「みちのくチャンス」、最大引き戻し率78.5%、同時当選なし、小役確率、機械割95.0〜106.7% — reliability: CONTEMPORARY_ANALYSIS
4. Pマンズ/プレイグラフ「ウィンネット、自社開発の遊技機第1弾発表」 — https://p-mans.blogspot.com/2006/ — 2006-08-08記事、ウィンネット企画開発第1弾、6種類ボーナス、高い合成確率の訴求 — reliability: CONTEMPORARY_INDUSTRY_ARCHIVE
5. 娯楽の学校「パチスロ5号機 2005-2006 全機種リスト」 — https://goraku-gakkou.com/5gouki-2005-2006/ — 2006年9月導入の時系列照合 — reliability: RETROSPECTIVE

## missingFields
- 設定別ボーナス確率
- 50枚あたりゲーム数
- RT純増/G
- 各BBの比較可能な基本獲得枚数
- 設定変更時のRT残G/内部RT状態処理
- 据え置き時のRT/内部状態引継ぎ
- 電源OFF→ONのみ時の内部処理
- 朝一恩恵/不利、変更判別、公開朝一数値

## conflicts
なし（現時点）。機械割は旧DBと当時HAZUSEが95.0 / 97.4 / 99.7 / 102.6 / 105.2 / 106.7%で一致。

## researchNotes
- resetBehavior欠損は機種名/型式相当表記に「設定変更」「リセット」「朝一」「据え置き」「電源OFF」「RT」「みちのくチャンス」「天井」「ガックン」を組み替え、当時解析、業界記事、旧DB、回顧資料を再探索した。
- RT存在と主要発動構造は補強できたが、設定変更/据え置き/電断時の本機固有処理は直接資料を回収できず、一般的な5号機挙動から推測しない。
