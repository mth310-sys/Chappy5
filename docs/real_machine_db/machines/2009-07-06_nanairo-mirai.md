# 七色未来

machineName: 七色未来
formalModelName: ナナイロミライB
inspectionNumber: 9S0213
manufacturer: SNKプレイモア
releaseDate: 2009-07-06
releaseDatePrecision: EXACT_CALENDAR_CROSSCHECKED
releaseDateNote: 2009年当時の導入日一覧および業界回顧で2009-07-06発売/導入を確認。P-WORLD・P_Style777・SNKプレイモア当時発表は2009年07月の月表記で整合。
generation: 5号機
systemType: ノーマル / ボーナス主体 / 天井救済RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pworld_retrospective_main:
    setting1: 97.6%
    setting2: 99.0%
    setting3: 100.9%
    setting4: 104.0%
    setting5: 108.2%
    setting6: 112.0%
  contemporary_p_style777:
    setting1: 97.2%
    setting2: 98.6%
    setting3: 100.2%
    setting4: 103.3%
    setting5: 107.3%
    setting6: 111.5%
  status: CONFLICT
  note: P-WORLD、5号機クロニクル、pacnkは97.6〜112.0%系列で一致。一方2009年当時更新のP_Style777は97.2〜111.5%。算出条件差を直接確定できないため平均せず両系列を保持。

initialHitBySetting:
  big:
    setting1: 1/277.7
    setting2: 1/273.1
    setting3: 1/268.6
    setting4: 1/260.1
    setting5: 1/246.4
    setting6: 1/229.1
  reg:
    setting1: 1/574.9
    setting2: 1/541.6
    setting3: 1/496.5
    setting4: 1/428.3
    setting5: 1/372.4
    setting6: 1/343.1
  combined:
    setting1: 1/187.3
    setting2: 1/181.6
    setting3: 1/174.3
    setting4: 1/161.8
    setting5: 1/148.3
    setting6: 1/137.4
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD・5号機クロニクル・P_Style777・pacnkでBIG/REGは丸め差範囲で一致。合算はP-WORLD/5号機クロニクルを主表記。

baseGamesPer50:
  setting1: 36.00G
  setting2: 36.48G
  setting3: 37.06G
  setting4: 38.04G
  setting5: 38.94G
  setting6: 39.65G
  status: ANALYSIS_HIGH_OLD_MAJOR
  note: パチマガスロマガ旧解析の1000円あたりゲーム数を直接採用。別系統回顧資料の36.0〜39.6Gレンジとも整合。

netIncrease:
  ceilingRT: 約+0.2枚/G
  status: ANALYSIS_CROSSCHECKED
  note: 天井到達時のみ発動する救済RT。通常時はボーナス主体。

basicPayout:
  big: 約312枚（345枚を超える払い出しで終了）
  reg: 約104枚（105枚を超える払い出しで終了）
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチマガスロマガ旧解析、P_Style777で一致。

modeSpecificMinimumData:
  - 通常時はBIG/REGで出玉を増やすノーマル機。ストーリー選択・パスワード機能は出玉モードとは分離。
  - BIG後1000Gハマリ、REG後は資料表記に772G/773G差があり、到達時は次回ボーナスまで継続する救済RTへ突入。
  - 天井RT純増は約+0.2枚/G。
  - 2009年当時解析で、設定変更でも天井までのゲーム数を引き継ぐことを確認。

resetBehavior:
  settingChangeBehavior: CEILING_GAME_COUNT_CARRY_OVER_CONFIRMED。2009年当時P_Style777が「設定変更でもゲーム数は引き継ぐ」と明記。設定変更による天井カウンタ初期化はしない。
  carryOverBehavior: CEILING_GAME_COUNT_CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED。設定変更を伴ってもボーナス後の天井進捗を引き継ぐため、朝一の宵越し天井狙いが成立し得る。単純据え置きの内部RT状態等は一般論で補間しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合の天井カウンタ/天井RT中状態/初期表示を本機固有の直接資料で確定できず。設定変更時の引継ぎ確認から推測転記しない。
  gameCounterReset: CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED
  ceilingAfterReset: NO_SHORTENING_OR_RESET_CONFIRMED_FOR_CEILING_COUNT。BIG後1000G、REG後772G/773Gという通常天井条件の進捗を設定変更後も継続。
  modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。通常低確/高確等の公開モードは確認しないが、天井RT発動中に設定変更した場合のRT残存/終了を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: CEILING_CARRY_OVER_CAN_CREATE_MORNING_OVERHANG_VALUE。設定変更でも天井進捗が消えないため前日ハマリの宵越し狙いが可能。設定変更専用の短縮天井・当選率アップ等は確認されない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶表示、ランプ等による本機固有の変更判別を十分な再探索後も確定できず。
  numericResetData:
    resetSpecificCeiling: NONE_CONFIRMED
    gameCountAfterSettingChange: CARRY_OVER
    normalCeilingAfterBIG: 1000G
    normalCeilingAfterREG: CONFLICT_772G_OR_773G
    resetModeDistribution: NOT_APPLICABLE_NO_MODE_CONFIRMED
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_AND_REG_CEILING_WORDING_CONFLICT
resetBehaviorQA: COMPLETE_RESEARCH_PASS_CEILING_CARRY_OVER_CONFIRMED

conflicts:
  - payoutRateBySetting: P-WORLD/5号機クロニクル/pacnk 97.6/99.0/100.9/104.0/108.2/112.0% vs 2009年当時P_Style777 97.2/98.6/100.2/103.3/107.3/111.5%。平均しない。
  - regCeiling: P_Style777はRB後772G、P-WORLD/後年解析はREG後773G。772G消化後の773G目発動という表現差の可能性はあるが、直接定義を確定できないためCONFLICT保持。

missingFields:
  - 機械割2系列の算出条件差
  - REG天井772G/773G表記差の厳密なカウント定義
  - 単純電源OFF→ON時の天井カウンタ・RT状態・初期表示挙動
  - 天井RT中の設定変更時にRT状態そのものが継続するか
  - ガックン/初期出目等の設定変更判別
  - 設定変更専用の朝一当選率・モード振り分け等（確認なし）

sources:
  - url: https://www.p-world.co.jp/machine/database/5567
    title: 七色未来 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: SNKプレイモア、型式ナナイロミライB、検定9S0213、2009年07月、BIG/REG/合算、97.6〜112.0%系列、BIG312枚/REG104枚、BIG後1000G・REG後773G天井RT。
  - url: https://p-kn.com/topics/exhibition/484/
    title: パチスロ新機種「七色未来」プレス発表会 / K-Navi
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: SNKプレイモア2009-05-14発表、業界初アドベンチャーパチスロ、2009年7月ホール導入予定。
  - url: https://ps777.net/data/snkplaymore/nanairo.htm
    title: 七色未来 / P_Style777
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ANALYSIS_HIGH
    usedFor: 2009年7月、型式、BIG/REG、97.2〜111.5%系列、獲得枚数、BIG後1000G・RB後772G天井、設定変更でも天井ゲーム数引継ぎ。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/24/a.php
    title: 七色未来 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ノーマル機、天井RT、BIG312枚/REG104枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/24/c.php
    title: 七色未来 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたり36.00/36.48/37.06/38.04/38.94/39.65G。
  - url: https://5goki.com/snkplaymore
    title: SNKプレイモア 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009/7、BIG/REG/合算、97.6〜112.0%系列の照合。
  - url: https://pacnk.com/slot/tools/sh_nanairo.html
    title: 七色未来 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: BIG/REG・97.6〜112.0%系列の照合、天井情報の補助。
  - url: https://crankyseven.com/nanairo-pc.htm
    title: 七色未来 解析攻略 / crankyseven
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 36.0〜39.6Gレンジ、BIG312枚/REG104枚、BIG後1000G・REG後773G、天井RT約+0.2枚/G。
  - url: https://slotkaiseki777.blog102.fc2.com/blog-entry-515.html
    title: 最新スロットホール導入日掲載 / 最新5号機パチスロ無料攻略解析情報ブログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY_CALENDAR
    usedFor: 2009-07-06七色未来導入日の確認、同日群確認。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_RETROSPECTIVE_ARCHIVE
    usedFor: 2009-07-06発売、天井RTのみの純Aタイプという当時記録の照合。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、388レコード、machine treeを再取得。388件地点を正本として継続。
  - repoで `2009-07-06_nanairo-mirai.md` が未登録であることを再確認して389候補として調査。
  - 「七色未来 / ナナイロミライ / ナナイロミライB / SNKプレイモア / 9S0213」と、導入日/機械割/PAYOUT/BIG/REG/合算/50枚/1000円/ベース/天井/設定変更/据え置き/電源OFF ON/朝一/宵越し/ガックン/初期出目を組み替えて再探索。
  - P-WORLD、K-Navi当時発表、P_Style777当時解析、パチマガスロマガ旧解析、5号機クロニクル、pacnk、旧解析DB、2009年導入日記録を横断。
  - 設定変更時の天井ゲーム数引継ぎは2009年当時解析で直接確認。単純電源OFF→ON、天井RT中の設定変更によるRT状態、ガックン等は直接根拠を確定できないため一般論から補間せずUNVERIFIED_AFTER_RESEARCH。
