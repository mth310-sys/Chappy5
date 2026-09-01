# ニューパルサーエボリューション

machineName: ニューパルサーエボリューション
modelName: ニューパルサーEVO
manufacturer: 山佐
releaseDate: 2008-05-25
generation: 5号機
systemType: ノーマル/Aタイプ・4thリール・技術介入
payoutRateBySetting:
  - setting1: 97.8%
  - setting2: 99.4%
  - setting3: 101.3%
  - setting4: 103.9%
  - setting5: 106.3%
  - setting6: 108.6%
  - confidence: ANALYSIS_SINGLE
  - note: 5号機クロニクル掲載値。設定6 109%という当時プレイグラフ記事の丸め表現とも概ね整合するが、設定別全段階の独立一次資料は今回未取得。
initialHitBySetting:
  BIG:
    setting1: 1/266.4
    setting2: 1/258.0
    setting3: 1/250.1
    setting4: 1/242.7
    setting5: 1/240.9
    setting6: 1/240.9
  REG:
    setting1: 1/468.1
    setting2: 1/452.0
    setting3: 1/422.8
    setting4: 1/385.5
    setting5: 1/343.1
    setting6: 1/302.0
  combined:
    setting1: 1/169.8
    setting2: 1/164.2
    setting3: 1/157.2
    setting4: 1/148.9
    setting5: 1/141.5
    setting6: 1/134.0
  confidence: ANALYSIS_HIGH
  note: HAZUSE設定別値。2008-05-09グリーンべるとの端点（BIG約1/266→1/240、RB約1/468→1/302、合成約1/169→1/134）と一致。
baseGamesPer50: 約32G/1000円
netIncrease: NOT_APPLICABLE
basicPayout:
  BIG: 平均約326枚 / 技術介入時最大333枚
  REG: 平均約113枚 / 技術介入時最大117枚
  officialRule: BIG 344枚超払い出し終了 / REG 139枚超払い出し終了
modeSpecificMinimumData: なし（ノーマルタイプ）

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更時処理を直接説明する現存資料は今回確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時固有処理の直接資料は未確認。ただし通常時の天井・周期CZ・RT/ART・モード構造は確認されないノーマルタイプ。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ON単独時の初期出目等を含む本機固有資料は未確認。
  gameCounterReset: NOT_APPLICABLE_CONFIRMED_STRUCTURE。通常時ゲーム数天井・周期到達型状態を持たないノーマルタイプとして確認。
  ceilingAfterReset: NONE_CONFIRMED。通常時天井自体を確認せず、リセット短縮天井の公開情報もなし。
  modeAfterReset: NOT_APPLICABLE_CONFIRMED_STRUCTURE。通常時モード構造を持つ資料なし。
  stateAfterReset: NOT_APPLICABLE_CONFIRMED_STRUCTURE。RT/ART/CZ等の持続状態なし。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示等による本機固有の設定変更判別資料を検索語変更後も確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT
resetBehaviorQA: PARTIAL_STRUCTURE_CONFIRMED_NO_RESET_NUMERIC_DATA

conflicts:
  - code: CONFLICT_RELEASE_DATE_DEFINITION
    detail: 2008-05-09グリーンべるとは「納品は5月25日からスタート予定」。山佐ネクスト現行公式は「稼働時期: 2008年6月」。本DBは具体的な納品開始予定日2008-05-25をreleaseDate主値とし、公式の稼働月2008-06を併記保持する。5号機クロニクルの2008年10月表記は当時記事・メーカー公式双方と大きく乖離するため低優先の競合資料として扱う。
  - code: CONFLICT_BASIC_PAYOUT_SECONDARY
    detail: 当時グリーンべるとはBIG平均326枚/REG平均113枚、技術介入最大333枚/117枚。5号機クロニクルは約312枚/104枚とする。定義差または後年整理誤差の可能性があるため平均化せず、当時記事とパチマガスロマガの最大獲得値を主採用。

missingFields:
  - 設定変更・据え置き・電源OFF→ON時の本機固有の初期出目/リール挙動
  - ガックン等の変更判別可否

sources:
  - url: https://news.p-world.co.jp/articles/2832/greenbelt
    title: ニューパル最新作が登場 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-05-25納品開始予定、型式名、BIG/RB端点、合成端点、1000円約32G、平均/最大獲得枚数
  - url: https://yamasa-next.co.jp/model_npe/
    title: 機種情報：ニューパルサーエボリューション / 山佐ネクスト
    retrievedAt: 2026-09-01
    confidence: OFFICIAL
    usedFor: 5号機Aタイプ、稼働時期2008年6月、BIG最大333枚、機種同定
  - url: https://hazuse.com/machine/pachislot/8S0117/
    title: ニューパルサーエボリューション / HAZUSE
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合成確率、型式名・検定番号
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/157/a.php
    title: ニューパルサーエボリューション 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル/同時成立/4thリール、払い出し終了条件、最大獲得枚数
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/157/e.php
    title: ニューパルサーエボリューション ボーナス中の打ち方 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: BIG最大333枚、REG最大117枚の技術介入手順
  - url: https://5goki.com/yamasa
    title: 山佐 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 設定別機械割97.8/99.4/101.3/103.9/106.3/108.6、導入月競合資料
  - url: https://p-mans.blogspot.com/2008/05/
    title: Pマンズ 2008年5月（プレイグラフ記事転載）
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 前作比出玉率105%→109%、発売時期周辺の当時記事照合
  - url: https://www.p-world.co.jp/machine/database/5188
    title: ニューパルサーエボリューション / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマルタイプ、BIG最大333枚、REG最大117枚

researchNotes:
  - resetBehavior欠損探索では「ニューパルサーエボリューション/ニューパルサーEVO/山佐」×「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/攻め時・ヤメ時」を組み替え、メーカー公式、当時業界記事、HAZUSE、パチマガスロマガ、P-WORLD、旧5号機DB、回顧資料を横断した。
  - パチマガスロマガには「攻め時・ヤメ時・設定変更時」節の存在までは確認できたが、検索結果から本機固有本文を取得できなかったため設定変更処理を推測で確定していない。
