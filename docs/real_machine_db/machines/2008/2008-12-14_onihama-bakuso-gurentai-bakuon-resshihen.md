# 鬼浜爆走紅蓮隊 爆音烈士編

machineName: 鬼浜爆走紅蓮隊 爆音烈士編
manufacturer: アビリット（当時発表・解析表記。ALL7では高砂、現P-WORLDではコナミアミューズメント表記）
releaseDate: 2008-12-14
releaseDatePrecision: DAY_CONFIRMED_INDUSTRY_DELIVERY_SCHEDULE
modelName: オニハマバクソウグレンタイ2
modelNumber: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: 8S0609
identityStatus: TITLE_MODEL_INSPECTION_RELEASE_DAY_CONFIRMED_MANUFACTURER_LABEL_CHANGED_BY_ERA
generation: 5号機
systemType: A+ART（ボーナス + ゲーム数上乗せ型ART「カッ飛びRUSH」）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  sourceA_pworld:
    setting1: 96.0%
    setting2: 98.1%
    setting3: 100.0%
    setting4: 103.3%
    setting5: 106.5%
    setting6: 110.9%
  sourceB_pachimaga_simulation:
    setting1: 95.41%
    setting2: 97.41%
    setting3: 100.22%
    setting4: 102.94%
    setting5: 107.23%
    setting6: 111.67%
  status: CONFLICT
  note: 市場掲載値とパチマガスロマガ・シミュレート値に差があるため平均化しない。

initialHitBySetting:
  big:
    setting1: 1/2048.00
    setting2: 1/2048.00
    setting3: 1/2048.00
    setting4: 1/2048.00
    setting5: 1/1771.24
    setting6: 1/1560.38
  reg_bg:
    setting1: 1/237.45
    setting2: 1/237.45
    setting3: 1/237.45
    setting4: 1/237.45
    setting5: 1/237.45
    setting6: 1/286.18
  otokogiBonus:
    setting1: 1/115.99
    setting2: 1/114.37
    setting3: 1/109.41
    setting4: 1/109.41
    setting5: 1/106.39
    setting6: 1/103.70
  combinedBonus:
    setting1: 1/75.07
    setting2: 1/74.39
    setting3: 1/72.26
    setting4: 1/72.26
    setting5: 1/70.54
    setting6: 1/72.58
  status: ANALYSIS_HIGH_MULTI_SOURCE

baseGamesPer50:
  setting1: 27.19G
  setting2: 27.19G
  setting3: 27.19G
  setting4: 27.15G
  setting5: 27.19G
  setting6: 27.05G
  status: ANALYSIS_HIGH
  note: パチマガスロマガ掲載の1000円あたりゲーム数。

basicPayout:
  big:
    regulatedEnd: 342枚超払い出しで終了
    netCoins: 約230枚
  reg_bg:
    regulatedEnd: 6回遊技で終了
    netCoins: 約36枚
  otokogiMission:
    regulatedEnd: 252枚超払い出し or SIN/REG成立等で終了
    netCoins: 平均約50枚（当時業界記事。最大174枚表記あり）
  status: INDUSTRY_AND_ANALYSIS_HIGH

netIncrease:
  art:
    name: カッ飛びRUSH
    value: 約+2.0枚/G
    status: INDUSTRY_AND_ANALYSIS_HIGH
    note: グリーンべると、パチマガスロマガ、K-Navi/P-WORLD系で約2枚/G表記。後年回顧には「ART単体約+1枚/G・ボーナス込み約+2枚/G」とする説明もあるため、定義差に注意。

modeSpecificMinimumData:
  art:
    name: カッ飛びRUSH
    basicStartGames: 50G〜300G級の初期/上乗せゲーム数が存在
    averageDuration: 約100G（P-WORLD台紹介）
    persistence: ボーナス成立・消化ではART残ゲーム数が消滅せず継続
    triggerSummary: BIG中赤7揃い、REG/BG・男気ミッション中のART抽選など
  normalState:
    states: 低確 / 高確 / 超高確
    note: ボーナス成立時のART当選期待度に影響する公開内部状態。詳細通常移行表は実機完全再現対象外のため収集省略。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 当時攻略ページには「設定変更&天井情報」項目があるが、現存本文で確認できるのは設定変更時の状態移行のみ。通常ゲーム数天井の直接数値は複数系統再探索後も本機について確定できず。

resetBehavior:
  settingChangeBehavior: 設定変更時は高確または超高確へ各46.9%で移行するとの当時攻略解析あり。合計93.8%が高確以上スタートとなるため朝一はART当選面で明確な恩恵候補。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の低確/高確/超高確状態、ART残ゲーム数、ボーナス成立後RT状態等の引継ぎを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の内部状態・ART残G等の扱いを直接確認できず。
  gameCounterReset: NOT_APPLICABLE_NO_NORMAL_GAME_CEILING_CONFIRMED。通常ゲーム数天井を本機で確定できていないため、天井G数リセット/引継ぎ値は設定しない。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用短縮天井の公開数値は確認できず。
  modeAfterReset: 設定変更時に高確46.9% / 超高確46.9%との解析値を確認。残り6.2%の扱いは本文に明記がないため推測で「低確」と断定しない。
  stateAfterReset: 高確/超高確への再選択は確認。ART残ゲーム数やRT内部状態の初期化/維持はUNVERIFIED_AFTER_RESEARCH。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 高確または超高確スタート合計93.8%という公開解析値。K-Naviにも「朝イチは狙い目」項目の存在を確認。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶背景等による本機固有の設定変更/据え置き判別を十分再探索したが、公開本文で確定できず。K-Naviには「液晶背景判別」項目の存在のみ確認。
  numericResetData:
    resetHighState: 46.9%
    resetSuperHighState: 46.9%
    resetHighOrAboveTotal: 93.8%
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: 高確以上93.8%（状態移行率としての数値。直接のART当選率ではない）

coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT
resetBehaviorQA: PARTIAL_RESET_CORE_CONFIRMED_STATE_DISTRIBUTION

conflicts:
  - 機械割はP-WORLD 96.0/98.1/100.0/103.3/106.5/110.9% とパチマガスロマガ・シミュレート 95.41/97.41/100.22/102.94/107.23/111.67% が競合。平均化しない。
  - ART純増は当時業界/解析で約+2.0枚/G表記が主だが、後年回顧にART単体約+1.0枚/G・ボーナス込み約+2.0枚/Gという定義差があるため注記。
  - メーカー表記は当時アビリット、ALL7高砂、現P-WORLDコナミアミューズメントと時代/系列で変化。発売当時の発表主体を主表記とする。

missingFields:
  - 据え置き時の内部状態/ART残ゲーム数引継ぎ
  - 電源OFF→ONのみ時の内部状態/ART残ゲーム数処理
  - 設定変更時の残り6.2%状態の直接明記
  - ガックン/初期出目/液晶背景による変更判別の具体条件
  - 通常ゲーム数天井の有無を断定できる一次/当時解析本文

sources:
  - url: https://web-greenbelt.jp/00003938/
    title: アビリット、「鬼浜」の後継機を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 当時メーカー、2008-12-14納品開始予定、ART約+2.0枚/G、BIG約230枚、BG約36枚、男気ミッション平均約50枚・最大174枚、設定1ボーナス合成約1/75。
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 2008-12-14導入予定、高砂表記。
  - url: https://www.p-world.co.jp/machine/database/5379
    title: 鬼浜爆走紅蓮隊 爆音烈士編 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式オニハマバクソウグレンタイ2、検定番号8S0609、機械割96.0〜110.9%、ボーナス確率、ART平均約100G・約2枚/G、基本獲得枚数。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/a.php
    title: 鬼浜爆走紅蓮隊～爆音烈士編～ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART約+2枚/G、BIG/REG/男気の規定払い出しと純増枚数。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/c.php
    title: 鬼浜爆走紅蓮隊～爆音烈士編～ 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたりゲーム数27.05〜27.19G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/22/h.php
    title: 鬼浜爆走紅蓮隊～爆音烈士編～ ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: BIG/REG/男気/合算の設定別確率、シミュレートPAYOUT95.41〜111.67%。
  - url: https://p.hisshobon.jp/machine/1275/1/19263
    title: 設定変更&天井情報 鬼浜爆走紅蓮隊～爆音烈士編～ / パチ＆スロ必勝本
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定変更時に高確46.9%、超高確46.9%へ移行。
  - url: https://p-kn.com/slot/890/
    title: 鬼浜爆走紅蓮隊 爆音烈士編 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE
    usedFor: ボーナス合成、約2.0枚/G、朝イチ狙い/液晶背景判別項目の存在確認。具体本文が現存取得できない項目は確定値に使わない。
  - url: https://w.atwiki.jp/5gouki/pages/122.html
    title: 鬼浜爆走紅蓮隊 爆音烈士編 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_CONTEMPORARY_RETROSPECTIVE
    usedFor: ART構造と設定別スペックの独立照合。詳細内部抽選表は物差し用途外のため不採用。

researchNotes:
  - 「鬼浜爆走紅蓮隊 爆音烈士編/鬼浜爆走紅蓮隊～爆音烈士編～/オニハマバクソウグレンタイ2/アビリット/高砂/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/高確/超高確/ガックン/液晶背景/1000円/50枚」を組み替え、当時業界記事、P-WORLD、パチマガスロマガ、必勝本、K-Navi、旧5号機DBを横断した。
  - 設定変更時の高確/超高確各46.9%は具体数値を回収できたためv0.7の公開朝一数値として採用。一方、据え置き/電断/変更判別の具体本文は回収できずUNVERIFIED_AFTER_RESEARCH。
  - 後継機「友情挽歌編」「狂闘旅情編」「激闘謳歌編」の有利区間・天井・電断仕様は本機へ流用していない。
