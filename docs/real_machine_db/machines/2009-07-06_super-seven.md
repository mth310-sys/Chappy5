# スーパーセブン

machineName: スーパーセブン
formalModelName: スーパーセブン
inspectionNumber: 9S0317
manufacturer: パイオニア
releaseDate: 2009-07-06
releaseDatePrecision: OLD_ANALYSIS_EXACT_WITH_ONE_DAY_SOURCE_VARIANCE
releaseDateNote: K-Naviはホール導入開始2009-07-06、ALL7も導入予定2009-07-06。パチビーは2009-07-07表記、パイオニア公式は2009年7月発売。主値は複数の具体日資料が一致する2009-07-06とし、7/7表記はCONFLICTとして保持。
generation: 5号機
systemType: ボーナス+RT / 準完全告知 / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  primary_pworld_pacnk:
    setting1: 95.9%
    setting2: 97.7%
    setting3: 98.8%
    setting4: 102.9%
    setting5: 106.0%
    setting6: 109.4%
  conflicting_retrospective_table:
    setting1: 95.9%
    setting2: 97.7%
    setting3: 99.8%
    setting4: 102.9%
    setting5: 106.0%
    setting6: 109.4%
  status: CONFLICT_SETTING3_ONLY
  note: P-WORLDとpacnkは設定3=98.8%で一致。別の5号機回顧スペック表のみ99.8%とする。平均せず98.8%系列を主値、99.8%を競合値として保持。

initialHitBySetting:
  big:
    setting1: 1/336.10
    setting2: 1/319.70
    setting3: 1/304.80
    setting4: 1/290.00
    setting5: 1/276.50
    setting6: 1/256.00
  reg:
    setting1: 1/697.20
    setting2: 1/655.40
    setting3: 1/618.30
    setting4: 1/585.10
    setting5: 1/555.40
    setting6: 1/512.00
  bonusCombined:
    setting1: 1/226.7
    setting2: 1/214.5
    setting3: 1/203.8
    setting4: 1/193.9
    setting5: 1/184.3
    setting6: 1/170.7
  rtFruitGameEntry:
    setting1: 1/697.19
    setting2: 1/655.36
    setting3: 1/618.26
    setting4: 1/585.14
    setting5: 1/555.39
    setting6: 1/512.00
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: BIG/REGはP-WORLD・pacnk・旧解析で概ね一致。RT「フルーツゲーム」は通常時の特殊リプレイ入賞から突入し、設定別特殊リプレイ確率を旧パチマガで取得。

baseGamesPer50:
  setting1: 37.81G
  setting2: 37.82G
  setting3: 37.81G
  setting4: 38.14G
  setting5: 38.81G
  setting6: 38.82G
  status: OLD_ANALYSIS_HIGH
  note: パチマガスロマガ旧解析「1000円あたりのゲーム数」直接値。

netIncrease:
  rtFruitGame: 約+0.8枚/G
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、K-Navi、パチマガ旧解析で一致。

basicPayout:
  big: 約309枚
  reg: 約104枚
  rtFruitGame:
    games: 60G
    expectedNetIncrease: 約48枚相当（+0.8枚/G×60Gの単純目安。資料公表の独立期待枚数ではないため比較主値には使用しない）
  regulatedPayout:
    big: 345枚以上払い出しで終了
    reg: 119枚以上払い出しで終了
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: BIG約309枚/REG約104枚、FG60G・約+0.8枚/GはP-WORLD/K-Navi/パチマガで照合。

modeSpecificMinimumData:
  - 通常時の特殊リプレイ入賞からチャンスゾーンを経由せずRT「フルーツゲーム」へ突入。
  - フルーツゲームは60G継続、純増約+0.8枚/G。
  - 通常ゲーム数到達型天井、ゲーム数解除、ART/AT、通常時の長期モード管理は今回の多系統再探索で確認されず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガ旧解析に「攻め時・ヤメ時・設定変更時」の専用項目存在までは確認できたが本文を回収できず、設定変更時にRT残G/特殊リプレイ状態がクリア・維持のどちらかは推測しない。
  carryOverBehavior: UNVERIFIED_RT_STATE_AFTER_RESEARCH。据え置き時に通常ゲーム数天井/ゲーム数モードの引継ぎ対象はないが、前日RT「フルーツゲーム」途中の場合の残G引継ぎを本機固有資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみでRT残G、リール初期位置、告知状態がどうなるかを示す直接資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNTED_CEILING_CONFIRMED
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  modeAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_MODE_CONFIRMED
  stateAfterReset: UNVERIFIED_RT_STATE_AFTER_RESEARCH
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、告知ランプ、RT挙動などから設定変更/据え置きを判別できる本機固有の直接根拠を十分な再探索後も確認できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    gameCountAfterSettingChange: NOT_APPLICABLE
    resetModeDistribution: NOT_APPLICABLE
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_RT_RESET_DETAILS_UNVERIFIED

conflicts:
  - payoutRateBySetting.setting3: P-WORLD/pacnk 98.8% vs 回顧スペック表99.8%。平均せず両値保持。
  - releaseDate: K-Navi/ALL7 2009-07-06 vs パチビー2009-07-07。パイオニア公式は2009年7月発売。主値2009-07-06。

missingFields:
  - 設定変更時のRT残G/内部状態処理
  - 据え置き・単純電源OFF→ON時のRT残G処理
  - ガックン/初期出目/告知ランプ等による変更判別
  - 設定変更専用の公開朝一数値（確認なし）
  - 機械割設定3の98.8/99.8差の原典条件

sources:
  - url: https://www.slot-pioneer.co.jp/products/2009.html
    title: パチスロ機種情報2001年~2009年 / パイオニア公式
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー、スーパーセブン2009年7月発売。
  - url: https://p-kn.com/slot/987/
    title: スーパーセブン / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 2009-07-06ホール導入開始、BIG約309枚、REG約104枚、RT搭載。
  - url: https://www.all7.jp/plans/index/2009/07
    title: 2009年7月 新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_CALENDAR
    usedFor: 2009-07-06導入予定、7月1〜5境界監査、同日群確認。
  - url: https://www.p-world.co.jp/machine/database/5572
    title: スーパーセブン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: DATABASE_HIGH
    usedFor: 型式名、検定番号9S0317、BIG/REG、合算、機械割、RT構造、純増、獲得枚数。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/91/a.php
    title: スーパーセブン 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: FG60G、純増約0.8枚/G、BIG約309枚、REG104枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/91/c.php
    title: スーパーセブン 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定別特殊リプレイ確率、1000円あたり37.81〜38.82G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/91/pioneer_slot_91.php
    title: スーパーセブン 攻略INDEX / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」解析項目の存在確認。本文未回収のためresetBehaviorは推測せずUNVERIFIED。
  - url: https://pacnk.com/slot/tools/sh_superseven.html
    title: スーパーセブン 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SECONDARY
    usedFor: BIG/REG、機械割95.9〜109.4%、設定3=98.8%の照合。
  - url: https://www.pachibee.jp/movies/index/1667
    title: スーパーセブン フルーツゲーム中 / パチビー
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 導入日2009-07-07という日付差、約+0.8枚/Gの照合。
  - url: https://pachinko.hatenablog.jp/entry/2009/07/super-seven
    title: パイオニア「スーパーセブン（5号機）」スペック
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SECONDARY
    usedFor: 機械割設定3=99.8%という競合値、BIG/REG/FG確率の補助照合。

researchNotes:
  - 2009-07-01〜05を「パチスロ/導入/納品/メーカー名」で境界監査し、安全に追加できる具体日付き未処理パチスロを今回確定できず、7/6群へ接続。
  - ALL7の2009-07-06一覧にある「サイボーグ009～未知なる加速へ～」はニューギンのCRパチンコ機であり、本パチスロDB本線から除外。グリーンべると2009-05-19記事でもCR機・7/5納品予定を確認。
  - 7/6群にはスーパーセブン、ドキッと!ビキニパイ、ハイアップマシンガンバージョン、エマニエル等が確認され、別の当時導入一覧では七色未来、うる星やつら2等も同日候補として確認。次回はrepo既存確認とパチンコ混入排除を行いながら同日群を閉じる。
  - 欠損判定前に「スーパーセブン/パイオニア/9S0317」と設定変更/リセット/朝一/据え置き/電源OFF ON/RT/フルーツゲーム/ガックン/初期出目/50枚/1000円/ベースを組み替え、公式、P-WORLD、K-Navi、旧パチマガ、パチビー、pacnk、当時/回顧資料を横断。
