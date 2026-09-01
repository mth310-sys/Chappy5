# ビートマニア

- machineName: ビートマニア / beatmania
- manufacturer: KPE
- modelName: ビートマニアJA
- releaseDate: 2008-04-21
- releaseDateDefinition: 一部先行導入開始日。通常導入は2008-05-07、当時発表上の納品開始予定は2008-05-06。
- releaseDateConfidence: INDUSTRY_PRIMARY_EXACT_ADVANCE_INTRODUCTION_DATE
- generation: 5号機初期
- systemType: ボーナス + AT + ART
- coreStatus: PARTIAL_CORE_BASE_UNVERIFIED
- resetBehaviorQA: PARTIAL
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.9% |
| 3 | 103.1% |
| 4 | 105.7% |
| 5 | 108.7% |
| 6 | 111.0% |

- 後年スペックDBで設定別値を確認し、当時攻略系の丸め値 `98 / 99 / 103 / 105 / 109 / 111%` と整合。
- confidence: ANALYSIS_HIGH

### initialHitBySetting

| 設定 | BIG | REG | ボーナス合成 |
|---:|---:|---:|---:|
| 1 | 1/390 | 1/780 | 1/260 |
| 2 | 1/379 | 1/753 | 1/252 |
| 3 | 1/352 | 1/745 | 1/239 |
| 4 | 1/334 | 1/728 | 1/229 |
| 5 | 1/315 | 1/705 | 1/218 |
| 6 | 1/303 | 1/676 | 1/209 |

- 当時攻略資料は一部を `1/378 / 1/744 / 1/704 / 1/675` 等に丸めるが、系列は一致。
- confidence: ANALYSIS_HIGH

### baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH
- `ビートマニア / beatmania / ビートマニアJA / KPE` と `50枚 / 1000円 / ベース / コイン持ち / 通常時小役` を組み替え、当時業界、K-Navi、P-WORLD、旧攻略、後年DB、中古実機資料まで横断したが、比較可能な50枚ベース値を確定できず。

### netIncrease

- ART「レイブタイム / RAVE TIME」: BIG終了後100%突入、最大100G。ボーナス成立またはパンク役入賞でも終了。
- 純増は資料競合。
  - 当時グリーンべると: 100Gで約30枚期待 → 約+0.3枚/G相当。
  - 旧実機販売DB: 約+0.3枚/G。
  - 当時攻略「パチスロ救急車」: 約+0.4枚/G。
- `CONFLICT_ART_NET_INCREASE_0.3_VS_0.4` として平均化しない。
- AT「トランスモード」は通常時/REG後などから突入し、小役ナビでコイン持ちを補助。旧攻略では30/40/50/60Gの規定G数系統を掲載。

### basicPayout

- BIG純増目安: 約270〜273枚。
- REG純増目安: 約50〜56枚。
- BIG払い出し終了条件は資料競合。
  - K-Navi: 350枚を超える払い出しで終了。
  - P-WORLD: 305枚を超える払い出しで終了。
- REGは70枚を超える払い出しで終了で一致。
- `CONFLICT_BIG_PAYOUT_THRESHOLD_350_OVER_VS_305_OVER` として保持。

### modeSpecificMinimumData

- BIG後はART「レイブタイム」へ100%突入。
- レイブタイムは最大100Gで、黒チェリー等のパンク役入賞回避ナビを伴うハズシ延命型。
- 通常時にはAT「トランスモード」を搭載。スイカ等が突入契機となる資料があり、最低30G継続系。
- 天井は当時攻略資料で「なし」と明記。
- BIG中は音楽ゲームを実際にプレイできるが、演出/ゲームスコアは物差しDBの性能コア対象外。

## resetBehavior

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: NOT_APPLICABLE_NORMAL_CEILING_NONE_CONFIRMED
- ceilingAfterReset: NONE_NORMAL_CEILING_CONFIRMED_BY_OLD_ANALYSIS
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH_AT_STATE
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH_AT_ART_RT_STATE
- advantageousSectionReset: NOT_APPLICABLE
- resetBenefits: NONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numericResetData: NONE_CONFIRMED

### resetBehavior調査メモ

- `ビートマニア / beatmania / ビートマニアJA / KPE` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / レイブタイム / トランスモード / RT状態 / ART状態 / ガックン / 初期出目 / 天井` を組み替えて再探索。
- メーカー現存アーカイブ、当時グリーンべると/P-WORLD業界記事、K-Navi、P-WORLD機種DB、当時攻略サイト、旧実機DB・実機販売資料、後年回顧DBを横断。
- 通常時ゲーム数天井は旧攻略資料で「なし」と確認できるため、通常天井/リセット短縮天井は該当なし。
- 一方、設定変更時にAT「トランスモード」抽選状態やART/RT内部状態を初期化するか、据え置き・電源OFF→ONで状態を引き継ぐか、本機固有のガックン/初期出目等による変更判別は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、設定変更専用の恩恵/不利、公開朝一数値も `NONE_CONFIRMED`。
- 一般的な5号機/KPE機の挙動から推測補完していない。

## 導入時期

- グリーンべると2008-03-21記事では納品は5月6日開始予定。
- グリーンべると2008-05-02記事では「5月7日から導入（一部先行導入店舗は4月21日）」と明記。
- コナミ現行アーカイブは稼働開始を2008年5月とする。
- 本DBは時系列漏れ防止のため、実ホールへの最初の確認可能導入日である `2008-04-21` をreleaseDateに採用し、通常導入 `2008-05-07` と納品予定 `2008-05-06` を別定義で併記する。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース「音ゲー『ビートマニア』をKPEがS機に」
   - https://news.p-world.co.jp/articles/2728/greenbelt
   - 2008-03-21発表、BB約270枚・RB約50枚、BB後ART、通常時AT、ART100G、5月6日納品予定
   - confidence: INDUSTRY
2. グリーンべると / P-WORLD業界ニュース「ビートマニア段位認定キャンペーン開催」
   - https://news.p-world.co.jp/articles/2827/greenbelt
   - 5月7日通常導入、一部先行導入店舗は4月21日
   - confidence: INDUSTRY
3. コナミアミューズメント 機種アーカイブ「2008年 beatmania」
   - https://www.konami.com/amusement/psm/archive/ps/2008/beatmania/
   - 稼働開始2008年5月、5号機 AT/ART
   - confidence: OFFICIAL
4. K-Navi「beatmania」
   - https://p-kn.com/slot/796/
   - BIG350枚超/REG70枚超払い出し終了、BIG後100Gレイヴタイム
   - confidence: OLD_ANALYSIS_DB
5. P-WORLD「ビートマニア」
   - https://www.p-world.co.jp/machine/database/5138
   - 型式名ビートマニアJA、BIG305枚超/REG70枚超払い出し終了
   - confidence: OLD_MACHINE_DB
6. パチスロ救急車「ビートマニア」
   - https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/beatmania/page_menu.html
   - 天井なし、ART約+0.4枚/G、AT規定G数、設定別BIG/REG/合算、機械割丸め値、BIG約273枚/REG約56枚
   - confidence: OLD_ANALYSIS
7. pachinko’s blog「KPE パチスロ ビートマニア」
   - https://pachinko.hatenablog.jp/entry/2008/05/beatmania
   - 型式名、設定別機械割、BIG/REG/合算、2008年5月
   - confidence: RETROSPECTIVE_SPEC_DB
8. 中一商事 KPE beatmania 実機資料
   - https://www.nakaiti.com/html/sKpe051.html
   - 型式、AT/ART、BIG約270枚/REG約50枚、ART約+0.3枚/G
   - confidence: RETROSPECTIVE_MACHINE_ARCHIVE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/電源OFF→ON時のAT・ART/RT内部状態処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_ART_NET_INCREASE_0.3_VS_0.4
- CONFLICT_BIG_PAYOUT_THRESHOLD_350_OVER_VS_305_OVER
