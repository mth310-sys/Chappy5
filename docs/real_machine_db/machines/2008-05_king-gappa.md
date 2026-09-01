# キングガッパ

machineName: キングガッパ
modelName: リーチ目発見スロガッパ1
manufacturer: エレコ / アルゼ系
releaseDate: 2008-05
generation: 5号機
systemType: ノーマル/Aタイプ・天井RT・技術介入
payoutRateBySetting:
  primarySimulation:
    setting1: 98.78%
    setting4: 102.39%
    setting6: 107.39%
    settingH: 113.93%
    confidence: ANALYSIS_HIGH
    sourceDefinition: パチマガスロマガのシミュレート値
  secondaryPublished:
    setting1: 97.8%
    setting4: 102.5%
    setting6: 107.1%
    settingH: 113.1%
    confidence: ANALYSIS_SINGLE
    sourceDefinition: P_Style777掲載値
  note: 機械割は算出条件/攻略条件差があるため平均化せずCONFLICT保持。5号機クロニクルは設定表記を1/4/5/6としているが、当時解析系は1/4/6/Hで一致するため設定ラベルも競合扱い。
initialHitBySetting:
  red7BIG:
    setting1: 1/590.41
    setting4: 1/555.39
    setting6: 1/508.03
    settingH: 1/455.11
  kappaBIG:
    setting1: 1/590.41
    setting4: 1/555.39
    setting6: 1/508.03
    settingH: 1/455.11
  BIGcombined:
    setting1: 1/295.21
    setting4: 1/277.69
    setting6: 1/254.02
    settingH: 1/227.56
  REG:
    setting1: 1/409.60
    setting4: 1/364.09
    setting6: 1/324.44
    settingH: 1/284.94
  combined:
    setting1: 1/171.56
    setting4: 1/157.54
    setting6: 1/142.47
    settingH: 1/126.52
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ値。P_Style777も同系列値で一致。P-WORLDは設定4/6/Hで軽微な差があるため補助競合として保持。
baseGamesPer50:
  setting1: 37.36G/1000円
  setting4: 37.80G/1000円
  setting6: 38.24G/1000円
  settingH: 38.70G/1000円
  confidence: ANALYSIS_HIGH
netIncrease: 天井RTは現状維持〜微増程度。比較可能な精密純増値はUNVERIFIED_AFTER_RESEARCH
basicPayout:
  BIG: 約310〜312枚（345枚超払い出し終了）
  REG: 約104枚（119枚超払い出し終了）
modeSpecificMinimumData:
  ceilingRT:
    afterBIG: ボーナス間1000G到達で次回ボーナスまでRT
    afterREG: ボーナス間800G到達で次回ボーナスまでRT
    purpose: ハマリ救済

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にBIG後1000G/REG後800Gの天井カウンタがクリアされるか、直前ボーナス種別をどう扱うかを直接示す本機固有資料は確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の天井ゲーム数引継ぎを直接明記する現存資料は今回確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでの天井カウンタ・初期出目・RT状態の扱いを直接示す本機固有資料は未確認。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。天井はBIG後1000G/REG後800Gと確定しているが、設定変更/電断時のカウンタ処理は未確定。
  ceilingAfterReset: NONE_CONFIRMED。設定変更後のみ短縮される公開天井値は確認できず。
  modeAfterReset: NOT_APPLICABLE_CONFIRMED_STRUCTURE。通常時モード抽選型のゲーム性は確認されない。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT滞在中の設定変更・電断時にRT残状態を維持/終了するかの直接資料は未確認。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ等による本機固有の設定変更判別資料を検索語変更後も確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetBehaviorQA: PARTIAL_CEILING_STRUCTURE_CONFIRMED_RESET_PROCESS_UNVERIFIED

conflicts:
  - code: CONFLICT_PAYOUT_DEFINITION
    detail: パチマガスロマガのシミュレート値は98.78/102.39/107.39/113.93%。P_Style777は97.8/102.5/107.1/113.1%、5号機クロニクルは99.0/102.5/107.2/113.3%。攻略条件・算出条件差の可能性があるため平均化しない。
  - code: CONFLICT_SETTING_LABEL_SECONDARY
    detail: 当時解析系の設定構成は1/4/6/H。5号機クロニクルは1/4/5/6表記で同系統値を掲載するため、後年資料の設定ラベル誤整理可能性を含む競合として隔離。
  - code: CONFLICT_BONUS_PROBABILITY_SECONDARY
    detail: P-WORLDは赤7/カッパBIGを設定4 1/560.14、設定6 1/520.13、H 1/474.9、REGを1/368.18/330.99/300.62とし、パチマガスロマガ/P_Style777の1/555.39/508.03/455.11、1/364.09/324.44/284.94と差がある。二系統を平均化せず主値は当時解析二系統一致側を採用。
  - code: RELEASE_DATE_DAY_UNVERIFIED
    detail: ユニバーサル公式、5号機クロニクル、当時更新資料で2008年5月発売までは一致するが、具体的な納品開始日/全国導入日を十分な再探索後も確定できなかったため月精度で保存。

missingFields:
  - 具体的な納品開始日/全国ホール導入日
  - 設定変更時の天井カウンタ処理
  - 据え置き・電源OFF→ON時の天井カウンタ処理
  - 天井RT中の設定変更/電断時の状態処理
  - 本機固有のガックン/初期出目等の変更判別
  - 天井RTの精密純増/G

sources:
  - url: https://www.universal-777.com/product/slot/king_gappa/
    title: キングガッパ / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-01
    confidence: OFFICIAL
    usedFor: エレコ製、5号機、ボーナス+RT、2008年5月発売、機種同定
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/h.php
    title: キングガッパ ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/4/6/HのBIG/REG/合成確率、シミュレート機械割
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/c.php
    title: キングガッパ 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり37.36/37.80/38.24/38.70G
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/a.php
    title: キングガッパ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/同時成立/天井RT、BIG約310枚、REG約104枚、払い出し終了条件
  - url: https://www.p-world.co.jp/machine/database/5195
    title: キングガッパ / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: BIG約312枚/REG約104枚、BIG後1000G・REG後800G天井RT、次回ボーナスまで継続、補助確率値
  - url: https://ps777.net/data/universal/king-gappa.htm
    title: キングガッパ / P_Style777
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 型式名、設定1/4/6/H、ボーナス確率の照合、機械割97.8/102.5/107.1/113.1、天井RT
  - url: https://5goki.com/universal
    title: ユニバーサル系5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年5月導入、機械割・獲得枚数の競合確認、天井RT構造
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年5月発売の当時記録、型式候補の時系列照合

researchNotes:
  - releaseDate再探索では「キングガッパ/リーチ目発見スロガッパ1/エレコ/アルゼ」×「発売/納品/導入/2008年5月/5月25日/5月26日/6月2日」を変更し、メーカー公式、P-WORLD、当時系更新資料、旧DBを横断。月までは一致したが日単位の一次・当時業界根拠は未確定。
  - resetBehavior再探索では「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/天井RT/ガックン/初期出目」を組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」節の存在、P-WORLD、旧天井DB、回顧資料まで確認したが、本機固有の設定変更時天井カウンタ処理本文を取得できなかったため推測で埋めていない。
