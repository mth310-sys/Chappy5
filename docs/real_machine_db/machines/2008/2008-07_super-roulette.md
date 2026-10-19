# スーパールーレット

machineName: スーパールーレット
manufacturer: ネイチャー・アセスメント
releaseDate: 2008-07
releaseDatePrecision: MONTH_CONFIRMED_EXACT_DATE_UNVERIFIED
modelName: スーパールーレット（25Φ）
generation: 5号機
systemType: ノーマル / 25Φ / 完全告知 / 同時成立あり
payoutRateBySetting:
  retrospectiveDatabase:
    setting1: 95.0%
    setting2: 97.0%
    setting3: 99.0%
    setting4: 102.0%
    setting5: 105.0%
    setting6: 108.0%
  confidence: RETROSPECTIVE_ANALYSIS_SINGLE
  note: 5号機クロニクル掲載値。独立した設定別機械割系列を今回確定できなかったため単一回顧DB値として保持。
initialHitBySetting:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 25Φ固有の設定別ボーナス確率について、機種名・メーカー・型式・ボーナス確率・解析を組み替え、当時業界/P-WORLD/旧攻略/回顧DBを再探索したが数列を確定できず。30Φはボーナス確率が異なることが明記されるため流用禁止。
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 25Φ固有の50枚あたりゲーム数/1000円ベースを確定できず。30Φは25Φよりコイン持ちが若干低い別スペックとされるため相互流用しない。
netIncrease:
  status: NOT_APPLICABLE
  note: RT/ART/ATを主出玉契機とする仕様は確認されず、4種類のリアルボーナス主体のノーマル機として扱う。
basicPayout:
  bonus465:
    payoutEndCondition: 465枚を超えるメダルの払い出しで終了
    netPayout: 約448枚
  bonus300:
    payoutEndCondition: 300枚を超えるメダルの払い出しで終了
    netPayout: 約273枚
  bonus200:
    payoutEndCondition: 200枚を超えるメダルの払い出しで終了
    netPayout: 約182枚
  bonus100:
    payoutEndCondition: 100枚を超えるメダルの払い出しで終了
    netPayout: 約91枚
  confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 2008-06-05グリーンべると、P-WORLD、パチマガスロマガ系旧攻略で整合。最大448枚は5号機当時のMAX純増として紹介。
modeSpecificMinimumData:
  status: NOT_APPLICABLE_OR_NONE_CONFIRMED
  note: 公開資料上、通常時ゲーム数天井・CZ・RT/ART/AT・朝一専用モード等を確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。スーパールーレット/ネイチャー・アセスメントと設定変更・リセット・朝一を組み替え、当時業界、P-WORLD、旧攻略、回顧DBを再探索したが本機固有処理を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の本機固有内部状態・成立済みボーナス等の扱いを確定する直接資料を確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの初期出目・リール状態・内部状態の本機固有資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井/周期ゲーム数の公開仕様を確認できず。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット短縮天井・朝一専用ゲーム数は確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。公開モードシステム/朝一専用モードを確認できず。
  stateAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。朝一再抽選対象となる高確/CZ/RT/ART等の公開内部状態を確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、表示等による設定変更/据え置き判別資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts: []

missingFields:
  - 具体導入日/全国納品開始日
  - 25Φ固有の設定別ボーナス確率
  - 25Φ固有の50枚あたりゲーム数/1000円ベース
  - 設定変更/据え置き/電源OFF→ONの本機固有処理
  - 本機固有の設定変更判別（ガックン/初期出目等）

sources:
  - url: https://web-greenbelt.jp/00003685/
    title: MAX448枚獲得の『スーパールーレット』 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-06-05発表、洞爺湖サミット明けの2008年7月納品予定、4種類のBB、純増約448/273/182/91枚、完全告知・同時成立概要
  - url: https://www.p-world.co.jp/machine/database/5212
    title: スーパールーレット / P-WORLD
    retrievedAt: 2026-09-01
    confidence: DATABASE
    usedFor: 4種類の規定払い出し終了条件と最大純増448/273/182/91枚の照合
  - url: https://5goki.com/nature-assessment
    title: ネイチャー・アセスメント5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_ANALYSIS_SINGLE
    usedFor: 25Φ/30Φを別項目として掲載、2008年7月導入、25Φ設定別機械割95.0〜108.0%
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/02/a.php
    title: スーパールーレット / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: ノーマル/完全告知/同時成立、4種類のボーナスと純増枚数の照合
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/03/a.php
    title: スーパールーレット30 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS
    usedFor: 30Φは25Φよりコイン持ちが若干低くボーナス確率が高い別スペックであることの分離確認

researchNotes:
  - 2008-06-05の当時業界記事では「洞爺湖サミット明けの7月納品予定」。5号機クロニクルも2008年7月導入で一致するため月精度は確定、全国納品開始の具体日は未確定。
  - 25Φと30Φは同名系列だが性能差が明記されるため別レコード扱い。25Φ値を30Φへ自動転記しない。
  - 機械割は回顧DB単一系列なのでRETROSPECTIVE_ANALYSIS_SINGLE。第二系列を回収できた場合に再照合する。
  - resetBehaviorは一般的な5号機ノーマル機の挙動を流用せず、公開機種固有資料がない項目はUNVERIFIED/NONE_CONFIRMED/NOT_APPLICABLEを区別した。
