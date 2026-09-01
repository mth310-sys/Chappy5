# まつり屋華恋

machineName: まつり屋華恋
manufacturer: フォープ（企画・プロデュース） / KPE（製造）
releaseDate: 2008-10-19
releaseDatePrecision: INDUSTRY_PRIMARY_SHIPMENT_START
releaseDateNote: グリーンべると2008-09-11記事で「納品は10月19日からの予定」と明記。
modelNumber: UNVERIFIED_AFTER_RESEARCH
generation: 5号機
systemType: ボーナス+ART / ボーナス後ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.9%
  setting2: 99.9%
  setting3: 101.9%
  setting4: 103.9%
  setting5: 106.5%
  setting6: 108.3%
  status: ANALYSIS_SINGLE
  note: 5号機クロニクル現存値。設定別PAYOUTを示す独立当時資料は今回回収できず、平均補間なし。

initialHitBySetting:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 「まつり屋華恋/マツリヤカレン/フォープ/KPE」「ボーナス確率/BIG/REG/合算/設定1〜6」等で当時攻略・機種DB・旧資料・回顧資料を再探索したが、比較可能な設定別確率表を確定できず。パチマガスロマガ現存ページもボーナス抽選確率/PAYOUTは「現在調査中」のため推測しない。

baseGamesPer50:
  approximateAllSettings: 約38G/1000円（50枚）
  status: INDUSTRY
  note: グリーンべると当時業界記事の公表説明。設定別ベースは未確認。

netIncrease:
  matsuriyaTime_ART: 約0.4枚/G
  choMatsuriyaTime_superART: 約1.0枚/G
  status: INDUSTRY

basicPayout:
  Karen_BIG: 約308枚
  Taro_BIG: 約210枚
  REG: 約100枚
  regulatoryPayoutThreshold:
    SUPER_BIG: 430枚超払い出しで終了
    BIG: 290枚超払い出しで終了
    REG: 140枚超払い出しで終了
  status: INDUSTRY_AND_ANALYSIS_CORROBORATED
  note: グリーンべるとの純増説明とパチマガスロマガ/P-WORLDの規定払い出し条件を定義分離して保持。

modeSpecificMinimumData:
  ART:
    matsuriyaTime:
      netIncrease: 約0.4枚/G
      navigation: 2択8枚役以外をナビ
      afterKarenBIG: 200G
      afterTaroBIG: 150G
    choMatsuriyaTime:
      netIncrease: 約1.0枚/G
      navigation: 全小役ナビ
      afterREG: 50G確定
      promotion: BIG中の「超」マーク出現で昇格
  bonusAfterART:
    allBonusAfter: ボーナス後はARTまたはRT/ART状態へ移行する構造をパチマガスロマガで確認
  specialCondition:
    after888G_bonus: ボーナス間888G以降のボーナス当選で「超まつり屋タイム」確定
    duringART_bonus: ART中のボーナス当選で「超まつり屋タイム」確定
  ceiling:
    status: NO_DIRECT_CEILING_RT_CONFIRMED
    note: 888Gは「到達時に即ART/RTへ突入する天井」ではなく、888G以降のボーナス当選時にスーパーARTが確定する恩恵条件として区別して保存。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガ現存TOPには「攻め時・ヤメ時・設定変更時」専用項目の存在を確認できるが、本文条件を回収できず。設定変更時の888Gカウンタ、ART/RT状態、内部状態を直接確定できない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のボーナス間888Gカウンタ、ART残ゲーム、内部状態の引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでボーナス間カウンタ、ART/RT状態、表示がどう処理されるか直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。ボーナス間888G恩恵条件のカウンタが設定変更でリセット/引継ぎのどちらか確定できず。
  ceilingAfterReset: NOT_APPLICABLE_OR_UNVERIFIED。通常の到達即発動型天井は確認できず、888G以降ボーナス時のスーパーART確定条件について設定変更後の短縮/据え置き数値は未確認。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用モードや設定変更専用モード振り分けを確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のART/RT/内部状態の扱いは直接資料未確定。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更・朝一専用の公開恩恵数値は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示、BGM等による本機固有の設定変更判別を確定できず。
  numericResetData:
    normalBonusGapBenefitThreshold: 888G以降のボーナス当選で超まつり屋タイム確定
    resetCeilingGameCount: NONE_CONFIRMED
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: manufacturer_label
    status: ROLE_DIFFERENCE_NOT_NUMERIC_CONFLICT
    sourceA: グリーンべると「企画・プロデュースはフォープ、製造はKPE」
    sourceB: 5号機クロニクル「メーカー：フォープ」
    handling: 企画/販売ブランドと製造会社の役割差として併記し、同一主体へ単純化しない。

missingFields:
  - 正式型式名
  - 設定別BIG/REG/ボーナス合算確率
  - 設定別50枚ベース
  - 設定変更時の888Gカウンタ処理
  - 据え置き/電源OFF→ON時の888Gカウンタ・ART/RT状態
  - 朝一専用モード/恩恵/不利の公開数値
  - 本機固有のガックン/初期出目等の変更判別

sources:
  - url: https://web-greenbelt.jp/00003825/
    title: フォープ、パチスロ参入第1弾機種を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-10-19納品開始予定、フォープ企画/KPE製造、ART純増0.4枚/G・スーパーART純増1.0枚/G、ボーナス後ART構造、888G以降ボーナス時スーパーART確定、華恋BB約308枚/太郎BB約210枚/RB約100枚、約38G/1000円。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/a.php
    title: まつり屋華恋 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ボーナス後ART/RT構造、規定払い出しS・BIG430枚/BIG290枚/REG140枚、純増約308/210/100枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/h.php
    title: まつり屋華恋 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 現存ページではボーナス抽選確率/PAYOUTが「現在調査中」であることを確認。欠損を推測補完しない根拠。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/akushima_slot/01/akushima_slot_01.php
    title: まつり屋華恋 TOP / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。ただし本文条件は回収不能のためresetBehaviorを推測しない。
  - url: https://www.p-world.co.jp/machine/database/5319
    title: まつり屋華恋 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: SUPER BIG430枚超/BIG290枚超/REG140枚超の払い出し終了条件を照合。
  - url: https://5goki.com/others
    title: その他メーカー 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年10月導入、メーカー表記フォープ、設定別機械割97.9/99.9/101.9/103.9/106.5/108.3%。
  - url: https://p-mans.blogspot.com/2008/09/
    title: フォープ第1弾は「まつり屋華恋」 / Pマンズ（2008年9月記事アーカイブ）
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY_ARCHIVE
    usedFor: フォープ企画・KPE製造、2008年9月時点の発表/内覧会時系列を補助照合。
