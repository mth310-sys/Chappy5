# 悪魔城ドラキュラII

machineName: 悪魔城ドラキュラII
manufacturer: KPE
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-07-20
releaseDateStatus: CONFIRMED_NATIONAL_INTRODUCTION_DATE
releaseDateNote: K-Naviとパチビーが2010-07-20のホール導入開始日で一致。KONAMI公式機種アーカイブは2010年7月稼働開始の月粒度で整合。
generation: 5号機
systemType: A+ART / セットストック式ART / CZ / 通常・天国モード
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_FORMAL_IDENTITY_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、497前線実レコード「お座敷の茶々」を再取得。
- 開始時正本地点は recordCount 497 / chronologicalFrontier 2010-07-05。
- K-Navi導入カレンダーおよび既存handoffの境界監査を継承し、2010-07-06〜07-19に新規全国導入パチスロの明確な前線を確認できず、次の明確な同日群2010-07-20へ前進。
- 「悪魔城ドラキュラII」をrepo検索し未登録を確認して498件目として追加。

## payoutRateBySetting

パチビー / P-WORLD系・後年回顧で一致する系列:
- 設定1: **96.7%**
- 設定2: **98.9%**
- 設定3: **100.4%**
- 設定4: **104.4%**
- 設定5: **109.0%**
- 設定6: **113.1%**

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス＋ART/DBB合算
- 設定1: **1/184.3**
- 設定2: **1/182.7**
- 設定3: **1/168.1**
- 設定4: **1/163.9**
- 設定5: **1/145.2**
- 設定6: **1/140.0**

### DBB突入率
- 設定1: **1/362.9**
- 設定2: **1/361.4**
- 設定3: **1/312.6**
- 設定4: **1/302.0**
- 設定5: **1/246.3**
- 設定6: **1/235.9**

### REG
- 設定1: **1/374.5**
- 設定2: **1/369.3**
- 設定3: **1/363.8**
- 設定4: **1/358.6**
- 設定5: **1/353.9**
- 設定6: **1/344.1**

P-WORLD・パチビーでDBB/REG系列を照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

機種名/KPE/型式候補と「50枚」「1000円」「ベース」「コイン持ち」を組み替え、公式・P-WORLD・K-Navi・パチビー・当時解析/回顧系を再探索したが、比較可能な本機固有値を確定できず。

baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
confidence: UNVERIFIED

## netIncrease

- ART「Dracula Battle Bonus（DBB）」: **約+1.5枚/G**
- DBBはボスバトル/REG間を1セットとする次回ボーナス系ARTで、1セット平均獲得 **約140枚**。
- 1回の抽選で最大 **7セット**ストック。

2010-05-12の娯楽産業記事が純増約1.5枚/G・1セット平均140枚・最大7セットを報道。パチビー/K-Navi/KONAMI公式アーカイブ系とゲーム構造が整合。
confidence: CONTEMPORARY_INDUSTRY_HIGH

## basicPayout

- REG: **80枚固定**
- バトル目: **MAX80枚**
- DBB: **1セット平均約140枚**
- ロングフリーズ: **REG + DBB 5セット + 次回天国モード**（K-Navi機種概要）

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はART期待度に関係する**通常 / 天国**の2モードを持つ。
- 低確 / 高確の内部状態も存在。P-WORLDは墓地ステージを高確濃厚と説明。
- 十字架は最大6個。MAX6個状態で次回ボスバトル/REG時はDBB確定。DBB突入まで十字架は消えない。
- ARTストックなしREG後はCZ「カウントダウンミッション」。指定G数（最大15G）をパンク回避して完走できればARTへ。
- DBBストックあり時は無間回廊を経て赤7揃いでARTへ。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## ceiling

- **1476G間、REGおよびDBB非成立**で天井条件成立。
- 天井到達後は**次回バトル目またはREG成立でDBB突入**。
- 1476G到達時に即ARTへ入る仕様ではなく、次のバトル目/REGを契機にDBBへ入る救済仕様として保存。

パチビーの本機専用天井記述で直接確認。
confidence: ANALYSIS_HIGH_DIRECT

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Navi本機ページに「設定変更後の挙動は?」という本機専用解析項目が現存することは確認したが、リンク先本文を現行公開ページから回収できず。設定変更で1476Gカウンタ、通常/天国モード、低確/高確、十字架、DBBストック、CZ/ART内部状態がclear/retain/reselectのどれになるかを推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1476G進捗、通常/天国、低高確、十字架、ARTストック/CZ状態の保持範囲を直接明記する本機固有資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの1476Gカウンタ、モード/状態、十字架、DBBストック/CZ/ART処理を直接明記する本機固有資料を確定できず。設定変更と電源再投入を同一視しない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井1476Gは確定しているが、設定変更時のclear/retainは本文未回収のため保留。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井/再セットG数は確定値なし。通常天井1476Gのみ確定。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/天国の2モードは確定しているが、設定変更時の初期振分・移行先は未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確、十字架、DBBストック、カウントダウンミッション/無間回廊などの設定変更時処理は未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用天国優遇、短縮天井、ART/CZ確定等の直接値を確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日1476G進捗、天国/高確、十字架/ストック等が失われるかを直接確認できないため不利扱いを推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ、演出等による本機固有の設定変更判別を高信頼資料で確定できず。

numericResetData:
- normalCeiling: **1476G（REG&DBB非成立）**
- resetCeilingGame: **UNVERIFIED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH / SETTING_CHANGE_DETAIL_PAGE_EXISTENCE_CONFIRMED_BUT_BODY_UNRECOVERED

## conflicts

- 今回、設定別機械割、合算、DBB/REG確率、通常天井1476G、ART約+1.5枚/G、1セット平均約140枚に有意な数値CONFLICTは確認されず。
- K-Naviの設定変更専用解析項目は存在するが本文が回収できないため、検索スニペットや一般的5号機挙動から補完しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact settingChangeBehavior for 1476G counter/mode/state/cross/DBB stock/CZ: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- exact powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numeric reset-specific distributions/shortened ceiling: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. KONAMIアミューズメント公式 機種アーカイブ「2010年 悪魔城ドラキュラⅡ」 — https://www.konami.com/amusement/psm/archive/ps/2010/dracula2/ — 2010年7月稼働開始、5号機RT/ART — reliability: OFFICIAL
2. K-Navi「悪魔城ドラキュラII」 — https://p-kn.com/slot/1217/ — 2010-07-20導入、REG80枚、DBB平均140枚、最大7ストック、十字架/通常天国・解析メニュー、天井/設定変更後解析項目の存在 — reliability: CONTEMPORARY_ANALYSIS
3. パチビー「悪魔城ドラキュラⅡ」 — https://www.pachibee.jp/machines/index/210050004 — 2010-07-20、設定別合算・機械割・DBB/REG、1476G天井、CZ/ART構造 — reliability: ANALYSIS_HIGH
4. P-WORLD「悪魔城ドラキュラII」 — https://www.p-world.co.jp/machine/database/5954 — DBB/REG設定別確率、通常/天国、低確/高確、十字架、カウントダウンミッション — reliability: INDUSTRY_MACHINE_DB
5. 娯楽産業 2010-05-12「KPE、パチスロ新機種『悪魔城ドラキュラⅡ』の発表」 — https://www.goraku-sangyo.com/kpe-%E3%80%81%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%82%AA%E9%AD%94%E5%9F%8E%E3%83%89%E3%83%A9%E3%82%AD%E3%83%A5%E3%83%A9%E2%85%B1%E3%80%8D%E3%81%AE%E7%99%BA/ — DBB純増約1.5枚/G、平均140枚、最大7ストック — reliability: CONTEMPORARY_INDUSTRY
6. パチマガスロマガ「悪魔城ドラキュラⅡ 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/20/a.php — 赤7ART、次回ボーナスまで、平均140枚、最大7セット、十字架MAX6 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
7. 後年回顧「悪魔城ドラキュラシリーズ 歴代機械割」 — https://www.marimo0925.net/pachislot-kikaiwari-ranking-akumajo-dracula-ban/ — 設定別機械割系列のクロスチェック — reliability: RETROSPECTIVE_SECONDARY

## researchTrail

- 検索語を「悪魔城ドラキュラII/Ⅱ」「KPE」「天井 1476」「設定変更後」「リセット」「朝一」「天国モード」「50枚」「1000円」「ベース」「型式」「検定番号」に変更して再探索。
- 公式機種アーカイブ、当時業界記事、K-Navi、パチビー、P-WORLD、パチマガスロマガ旧解析、後年回顧を横断。
- K-Naviの「設定変更後の挙動は?」項目は確認できるものの詳細本文の取得に失敗したため、resetBehaviorは未回収項目を明示的にUNVERIFIEDで残した。
