# トロピカセブンS-30

machineName: トロピカセブンS-30
alternateNames:
  - トロピカセブンS30
manufacturer: パラジェーピー
releaseDate: CONFLICT_2008-06_OR_2008-07
releaseDatePrecision: MONTH_CONFLICT_AFTER_RESEARCH
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ
payoutRateBySetting:
  setting1: 95.6%
  setting2: 98.3%
  setting3: 100.6%
  setting4: 103.6%
  setting5: 106.3%
  setting6: 109.2%
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガ掲載のメーカー発表値と5号機クロニクル、後年実機資料で一致。
initialHitBySetting:
  BIG: UNVERIFIED_AFTER_RESEARCH
  REG: UNVERIFIED_AFTER_RESEARCH
  combined:
    setting1: 1/204.8
    setting2: 1/191.6
    setting3: 1/180.0
    setting4: 1/168.5
    setting5: 1/159.1
    setting6: 1/149.0
  confidence: ANALYSIS_HIGH
  note: 合成確率はパチマガスロマガ掲載のメーカー発表値と後年実機資料で一致。BIG/REG個別設定別確率は検索取得できた本文では確定できず推測しない。
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガでは「1000円あたりのゲーム数 現在調査中」と明記。機種名表記揺れ・メーカー名・30Φと「50枚/1000円/ベース/コイン持ち」を組み替えて旧DB・後年資料まで再探索したが直接値を確定できず。
netIncrease: NOT_APPLICABLE（ノーマルタイプ。RT/ART/ATの継続純増は確認されない）
basicPayout:
  BIG:
    payoutDisplay: 345枚超払い出しで終了
    netPayout: 約312枚
  REG:
    payoutDisplay: 105枚超払い出しで終了
    netPayout: 約104枚
  confidence: ANALYSIS_HIGH
  note: パチマガスロマガで確認。
modeSpecificMinimumData:
  gameSystem:
    type: 完全告知ノーマル
    note: 基本はレバーON告知。無音、遅れ、ボーナステンパイ時、第3停止後告知も存在。物差しDBでは演出詳細は追加収集しない。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 通常ゲーム数天井・救済RT・周期CZの直接資料を確認できず。ノーマルタイプとして資料上も攻略上の天井記載を確認できない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/表記揺れ/パラジェーピーと「設定変更/リセット/朝一」を組み替え、パチマガスロマガ・5号機DB・当時系履歴・後年資料を横断したが、本機固有の設定変更時初期出目や内部処理を直接確認できず。
  carryOverBehavior: NO_GAME_COUNT_OR_MODE_SYSTEM_CONFIRMED。据え置きで客行動に影響する公開天井ゲーム数・RT残G・モード等は確認されない。本機固有の表示/初期出目維持はUNVERIFIED。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の初期出目・告知ランプ等の本機固有挙動を直接確認できず。
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開モードシステム/朝一専用モードを確認できず。
  stateAfterReset: NO_PERSISTENT_RT_ART_STATE_CONFIRMED。RT/ART/AT等の持続状態は確認されない。ボーナス成立中など実機一般処理は物差し対象外。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、告知ランプ等による本機固有の変更判別は直接資料を確認できず。
  numericResetData: NONE_CONFIRMED

coreStatus: PARTIAL_CORE_INDIVIDUAL_BONUS_AND_BASE_UNVERIFIED
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_DETECTION_UNVERIFIED

conflicts:
  - field: releaseDate
    sourceA: 5号機クロニクル
    valueA: 2008/6
    sourceB: パチスロ業界初まとめ 更新情報5 / pachinko’s blog
    valueB: 2008/7
    handling: CONFLICT。平均化・推測せず2008-06/07境界機として保持。具体的納品日も未確定。

missingFields:
  - 導入月の確定（2008-06 vs 2008-07）
  - 具体的な納品/導入日
  - 設定別BIG確率
  - 設定別REG確率
  - 50枚あたりゲーム数/1000円ベース
  - 本機固有の設定変更・電源OFF→ON時の初期出目/表示挙動
  - 本機固有の変更判別情報

sources:
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/01/a.php
    title: トロピカセブンS-30 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ノーマル完全告知、BIG345枚・約312枚、REG105枚・約104枚
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/01/h.php
    title: トロピカセブンS-30 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: メーカー発表の設定別ボーナス合成確率、設定別PAYOUT
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/01/c.php
    title: トロピカセブンS-30 小役出現確率 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数が当時資料でも「現在調査中」であることの確認
  - url: https://5goki.com/parajp
    title: パラジェーピー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008/6導入表記、設定別機械割照合
  - url: https://pachinko.hatenablog.jp/entry/2008/07/toropica-seven
    title: パラジェーピー「トロピカセブンS-30」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年7月リリース表記、ノーマル、設定別出玉率・合算確率の照合
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 当時系更新履歴の2008/7発売表記、パラジェーピー参入初期機としての識別
  - url: https://news.p-world.co.jp/articles/2791/greenbelt
    title: サミットに伴う全国の入替自粛期間出揃う / P-WORLD・グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008年6〜7月の導入日資料解釈に必要な洞爺湖サミット入替自粛背景。北海道6/5〜7/21、全国でも6月中旬〜7月中旬の自粛が多数。

researchNotes:
  - 2008年5月末を閉じた後、2008年6月候補をメーカー別一覧・当時業界記事・旧DB・回顧資料で監査。P-WORLDの過去導入カレンダー検索結果は2008年6月0件表示で、同時期には洞爺湖サミットに伴う全国的な入替自粛が存在した。
  - その中で5号機クロニクルだけがトロピカセブンS-30を2008/6導入と記録。一方、当時系のパチスロ業界初まとめは2008/7発売、後年実機資料も2008.07とするためreleaseDateはCONFLICTで保存。
  - 性能値はパチマガスロマガのメーカー発表値を主軸にし、5号機クロニクル・後年実機資料で機械割/合算を照合した。
  - BIG/REG個別確率は検索語を「BIG/REG/ボーナス確率/設定差/単独成立」に変えたが、今回取得できた本文では個別表を確定できずUNVERIFIED_AFTER_RESEARCH。
  - baseGamesPer50はパチマガスロマガ自身が「現在調査中」としており、後年資料でも比較可能な直接値を確認できなかった。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/天井」を機種名・メーカー名と組み替えて再探索。通常ゲーム数天井・RT/ART・公開モード・朝一専用恩恵は確認されず、本機固有の初期出目/変更判別だけをUNVERIFIED_AFTER_RESEARCHで残した。
