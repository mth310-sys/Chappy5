# チキチキボカン

machineName: チキチキボカン
manufacturer: オーイズミ
releaseDate: 2008-09
releaseDatePrecision: MONTH_CONFIRMED_MULTI_SOURCE_EXACT_DAY_UNVERIFIED
modelName: チキチキボカン
modelNameStatus: CONFIRMED
modelNumber: 8S0480
modelNumberStatus: RETROSPECTIVE_DATABASE
modelNameNote: HAZUSE現存機種ページで型式名「チキチキボカン」、検定番号8S0480を確認。2008-06-20保通協型式試験適合は当時業界記事で確認するが、試験適合日を導入日にしない。
generation: 5号機
systemType: ノーマル/同時成立あり+天井救済RT+完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  sourceA:
    setting1: 97.0%
    setting2: 99.5%
    setting3: 102.0%
    setting4: 105.5%
    setting5: 109.5%
    setting6: 115.0%
    source: HAZUSE / 5号機クロニクル
  sourceB_simulated:
    setting1: 97.38%
    setting2: 100.04%
    setting3: 102.18%
    setting4: 105.47%
    setting5: 109.36%
    setting6: 114.22%
    source: パチマガスロマガ（シミュレート値）
  status: CONFLICT
  note: 設定1〜6で資料差あり。丸めだけでは説明しにくい設定2・6差を含むため平均せず双方保持。

initialHitBySetting:
  BIG:
    setting1: 1/315.08
    setting2: 1/303.41
    setting3: 1/292.57
    setting4: 1/282.48
    setting5: 1/270.81
    setting6: 1/251.10
  REG:
    setting1: 1/425.56
    setting2: 1/390.10
    setting3: 1/350.46
    setting4: 1/309.13
    setting5: 1/282.48
    setting6: 1/251.10
  bonusCombined:
    setting1: 1/181.04
    setting2: 1/170.67
    setting3: 1/159.45
    setting4: 1/147.60
    setting5: 1/138.26
    setting6: 1/125.55
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: パチマガスロマガ精密値とHAZUSE丸め値が一致。

baseGamesPer50:
  setting1: 38.05G
  setting2: 38.77G
  setting3: 38.77G
  setting4: 39.56G
  setting5: 40.89G
  setting6: 41.37G
  status: ANALYSIS_HIGH_SINGLE_PRIMARY
  note: パチマガスロマガ掲載の1000円あたりゲーム数。精密な独立照合は今回得られなかったため単一高信頼解析値として保持。

netIncrease:
  ceilingRT: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 天井救済RT搭載自体は当時業界記事・パチマガスロマガで確認。比較可能な1Gあたり純増値は表記揺れ・純増/増加枚数/RT中/天井RTを変えて再探索したが直接確定できず、独自算出しない。

basicPayout:
  BIG: 約311枚
  REG: 約103枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガ。掲載上の規定払い出しはBIG344枚、REG104枚超で終了。HAZUSE配当表にはBIG331枚超表記があり規定払い出し値はCONFLICTだが、物差しに用いる実獲得目安は約311枚/約103枚を主記録。

modeSpecificMinimumData:
  structure: ボーナス主体の完全告知ノーマル機にハマリ救済の天井RTを搭載。
  normalCeiling: BIG後700G / REG後500Gという後年天井狙い資料を確認。ただし高信頼一次/当時解析本文による独立照合が得られていないため ANALYSIS_SINGLE_LOW として保持。
  ceilingRT: 天井到達後の救済RT搭載は当時業界記事とパチマガスロマガで確認。
  RTNetIncrease: UNVERIFIED_AFTER_RESEARCH
  status: ANALYSIS_HIGH_FOR_STRUCTURE / ANALYSIS_SINGLE_LOW_FOR_CEILING_NUMERIC

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガ機種メニューに「攻め時・ヤメ時・設定変更時」項目の存在は確認したが、現存検索インデックスから本機固有本文を取得できず、設定変更時の天井ゲーム数・RT状態を直接確定できない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にBIG後700G/REG後500Gとされる天井カウンタを引き継ぐか、本機固有資料で直接確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の天井カウンタ/RT状態処理を直接確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時ハマリ救済天井が存在するため重要項目だが、設定変更時リセット/据え置き引継ぎを一般的5号機挙動から補間しない。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの短縮天井や専用天井数値は確認できず。ただし通常天井カウンタ自体の変更時処理は未確定。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常時モード管理を物差し上必要とする構成は確認されず、朝一専用モード振り分けも確認なし。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更/据え置き/電断時の天井RT状態処理を本機固有資料で確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時の短縮天井・RT優遇・朝一当選率優遇など公開恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「チキチキボカン / チキチキボカン8S0480 / オーイズミ / 全日遊連」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / ガックン / 初期出目 / 変更判別 / RT」を組み替え、当時業界記事・パチマガ系・旧DB・後年回顧資料を横断したが、本機固有の変更判別条件を確定できず。
  numericResetData:
    normalCeilingAfterBIG: 700G（ANALYSIS_SINGLE_LOW）
    normalCeilingAfterREG: 500G（ANALYSIS_SINGLE_LOW）
    resetCeilingGameCount: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_RT_NET_INCREASE_AND_CEILING_NUMERIC_LOW_CONFIDENCE
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: HAZUSE / 5号機クロニクル 97.0/99.5/102.0/105.5/109.5/115.0%
    sourceB: パチマガスロマガ simulation 97.38/100.04/102.18/105.47/109.36/114.22%
    handling: 平均せず双方保持
  - field: BIGRegulatedPayoutLabel
    status: CONFLICT_NON_CORE_DEFINITION
    sourceA: パチマガスロマガ BIG344枚超払い出し終了
    sourceB: HAZUSE BIG331枚超払い出し終了
    handling: 規定払い出し表記の競合。実獲得目安約311枚を物差し主値として保持し、規定値は平均しない。

missingFields:
  - 天井RTの1Gあたり純増の直接値
  - 2008年9月内の具体発売/納品/初回ホール導入日
  - BIG後700G/REG後500G天井数値の高信頼独立照合
  - 設定変更時の天井カウンタ/RT状態処理
  - 据え置き/電源OFF→ON時の天井カウンタ/RT状態引継ぎ
  - ガックン/初期出目等の設定変更判別
  - 朝一専用恩恵/不利および公開朝一専用数値

sources:
  - url: https://p-mans.blogspot.com/2008/07/
    title: 全日がオーイズミとの共同開発第2弾を公表 / Pマンズ（プレイグラフ転載）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_ARCHIVE
    usedFor: 2008-06-20型式試験適合、全日遊連×オーイズミ共同開発第2弾、天井救済RT搭載。型式試験日を導入日には使用しない。
  - url: https://p-mans.blogspot.com/2008/09/
    title: 電気使用量等調査は回収率8割を達成 / Pマンズ（プレイグラフ転載）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_ARCHIVE
    usedFor: 2008-09-18時点で申込期限を10月末まで延長した販売状況。販売申込継続と導入済み有無を混同しないための境界資料。
  - url: https://5goki.com/oizumi
    title: オーイズミ5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月導入、機械割97.0〜115.0%の再照合。
  - url: https://pacnk.com/photoslot/mlist_2008.html
    title: 機種一覧 2008年度 / パチンコFAN
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月機種一覧にチキチキボカンを確認。
  - url: https://hazuse.com/machine/pachislot/8S0480/
    title: チキチキボカン / HAZUSE
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: 型式名、検定番号8S0480、設定別BIG/REG/合算、機械割97.0〜115.0%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/18/a.php
    title: チキチキボカン 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/同時成立あり/天井RT/完全告知、BIG約311枚、REG約103枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/18/c.php
    title: チキチキボカン 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたり38.05〜41.37G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/18/h.php
    title: チキチキボカン ボーナス確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算精密値、シミュレート機械割97.38〜114.22%。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/18/oizumi_slot_18.php
    title: チキチキボカン 機種トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 天井RT項目と「攻め時・ヤメ時・設定変更時」項目の存在確認。本文を取得できない挙動は推測しない。
  - url: https://macerate.seesaa.net/article/226311943.html
    title: 天井ハイエナ期待値リスト た行
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_LOW
    usedFor: BIG後700G / REG後500Gという天井数値候補。独立高信頼照合がないため低信頼注記付き。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前296「タワラカワラ」を再読し、LATEST_HANDOFF基準296件地点から開始。
  - 前回保留のチキチキボカンについて、当時業界記事の申込継続だけで未導入と判断せず、5号機クロニクル・パチンコFAN・別2008年一覧を再監査。複数独立資料で2008年9月導入が一致したため月精度で漏れ防止追加。
  - 2008年9月内の具体発売/納品/初回ホール導入日は、全日遊連/オーイズミ/当時業界記事/ホール導入記録を再探索したが今回も確定できず。月精度を維持して日付を推測しない。
  - 性能コアはパチマガスロマガ、HAZUSE、5号機クロニクルを横断。ボーナス確率は一致、機械割はCONFLICT、50枚ベースはパチマガ高信頼単一値。
  - resetBehaviorは設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/ガックン/初期出目/変更判別/RTを組み替えて再探索。天井RTの存在は確定したが、変更・据え置き・電断時の天井カウンタ処理は本機固有の直接資料を取得できず一般論で補間しない。
