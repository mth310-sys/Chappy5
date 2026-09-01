# 花浪漫N-30

machineName: 花浪漫N-30
manufacturer: タイヨー
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
modelName: 花浪漫N-30
generation: 5号機
systemType: ノーマル / 30Φ / 完全告知
payoutRateBySetting:
  retrospectiveDatabase:
    setting1: 96.7%
    setting2: 98.1%
    setting3: 99.7%
    setting4: 102.2%
    setting5: 104.3%
    setting6: 106.3%
  confidence: ANALYSIS_SINGLE
  note: 5号機クロニクル掲載値。今回、同一設定別機械割を示す別系統資料は確定できず単一二次資料値として保持。
initialHitBySetting:
  BIG:
    setting1: 1/287.4
    setting2: 1/277.7
    setting3: 1/268.6
    setting4: 1/254.0
    setting5: 1/242.7
    setting6: 1/234.1
  REG:
    setting1: 1/682.7
    setting2: 1/668.7
    setting3: 1/630.2
    setting4: 1/585.1
    setting5: 1/565.0
    setting6: 1/520.1
  combined:
    setting1: 1/202.3
    setting2: 1/196.2
    setting3: 1/188.3
    setting4: 1/177.1
    setting5: 1/169.8
    setting6: 1/161.4
  confidence: ANALYSIS_HIGH
  note: P-WORLDの設定別BIG/REG/合成を採用。2008-08-08グリーンべると記事の沖縄限定R-30比較記述により、N-30とは別スペックであることも確認。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 機種名表記揺れ、型式/メーカー名と50枚・1000円・ベース・コイン持ちを組み替え、当時業界・攻略・旧DB・回顧資料を横断したが比較可能な値を確定できず。
netIncrease:
  status: NOT_APPLICABLE
  note: RT/ART/ATの搭載を示す公開仕様は確認できず、ボーナス主体のノーマル機として扱う。
basicPayout:
  BIG:
    payoutEndCondition: 349枚を超える払い出しで終了
    netPayout: UNVERIFIED_AFTER_RESEARCH
  REG:
    payoutEndCondition: 109枚を超える払い出しで終了
    netPayout: UNVERIFIED_AFTER_RESEARCH
  confidence: ANALYSIS_HIGH_FOR_END_CONDITIONS
  note: P-WORLDで規定払い出し終了条件を確認。純増枚数は推測換算せず未確定のまま保持。
modeSpecificMinimumData:
  status: NOT_APPLICABLE
  note: 通常モード、CZ、RT/ART/AT、ゲーム数天井を物差し上必要な公開仕様として確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。花浪漫N30/花浪漫N-30/タイヨーと設定変更・リセット・朝一・据え置き・ガックンを組み替え、当時記事、P-WORLD、旧攻略/回顧資料を再探索したが、本機固有の設定変更時処理を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に引き継ぐべき公開ゲーム数/モード/RT状態は確認されていないが、電源処理そのものの本機固有資料もないため一般論で確定しない。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの初期出目・リール挙動・内部状態に関する本機固有の直接資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井/周期ゲーム数を示す公開仕様を確認できず。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット時短縮天井や変更専用ゲーム数は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開モードシステムおよび朝一専用モードは確認できず。
  stateAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一に再抽選対象となる高確/CZ/RT/ART等の公開内部状態は確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示等による花浪漫N-30固有の設定変更/据え置き判別資料を確定できず。他機種・後年タイヨー機の一般挙動は流用していない。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts: []

missingFields:
  - 具体導入日/納品開始日
  - 50枚あたりゲーム数/1000円ベース
  - BIG/REGの実純増枚数
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003652/
    title: 「花浪漫」復活、5号機でもチェリーがアツい！ / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-06-24発表、花浪漫N-30の製品名、30Φ完全告知系のゲーム性
  - url: https://www.p-world.co.jp/machine/database/5235
    title: 花浪漫N30 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合成、BIG349枚超・REG109枚超の払い出し終了条件、2008-07-26時点で導入後の実戦投稿が存在する時系列補助
  - url: https://5goki.com/taiyo
    title: タイヨー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年7月導入、設定別機械割96.7〜106.3%
  - url: https://news.p-world.co.jp/articles/2959/greenbelt
    title: 情報提供端子板の対応機種、8社12機種に / P-WORLD（グリーンべると転載）
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-07-19時点で花浪漫N-30が新規対応機種に列挙されている時系列照合
  - url: https://web-greenbelt.jp/00003774/
    title: 『花浪漫30』に沖縄限定ver.が登場 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 花浪漫R-30がN-30とは別スペックの沖縄限定版で、7月下旬導入であることの分離確認
  - url: https://pachimaga.com/free/playback/33b34b9eff3031dc11547899e913221b9833305e.php
    title: 5号機ヒストリア復刻大特集 / パチマガスロマガFREE
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS
    usedFor: 2008年後半機として花浪漫N-30が収録されることの世代/時系列照合

researchNotes:
  - 2008-06-24に当時業界記事で発表、2008-07導入は後年DBで確認。2008-07-19時点で情報提供端子板対応機種に列挙され、2008-07-26のP-WORLD掲示板には既導入を前提とした実戦投稿があるため7月導入自体は高信頼。ただし全国納品開始の具体日は今回確定できず月精度とした。
  - 花浪漫R-30は2008年7月下旬導入の沖縄限定別スペック。N-30のBIG/REG値をR-30へ転記しない。逆も同様。
  - 機械割は5号機クロニクル単一系列のためANALYSIS_SINGLE。今後当時解析資料が復元できた場合に照合対象。
  - resetBehaviorはノーマル機一般の挙動を補完せず、本機固有資料がない項目はUNVERIFIED/NONE_CONFIRMED/NOT_APPLICABLEを区別して記録。
