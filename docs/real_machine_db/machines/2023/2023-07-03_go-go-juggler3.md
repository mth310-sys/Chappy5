# ゴーゴージャグラー3

recordNo: 1575
machineName: ゴーゴージャグラー3
manufacturer: 北電子
formalModel: Sゴーゴージャグラー3KA
inspectionCode: 2S0743
releaseDate: 2023-07-03
generation: 6号機 / 6.5号機時代 / メダル機
systemType: ノーマル / Aタイプ / 完全後告知
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.2%
- 設定2: 98.2%
- 設定3: 99.4%
- 設定4: 101.6%
- 設定5: 103.8%
- 設定6: 106.5%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG
- 設定1: 1/259.0
- 設定2: 1/258.0
- 設定3: 1/257.0
- 設定4: 1/254.0
- 設定5: 1/247.3
- 設定6: 1/234.9

### REG
- 設定1: 1/354.2
- 設定2: 1/332.7
- 設定3: 1/306.2
- 設定4: 1/268.6
- 設定5: 1/247.3
- 設定6: 1/234.9

### ボーナス合算
- 設定1: 1/149.6
- 設定2: 1/145.3
- 設定3: 1/139.7
- 設定4: 1/130.5
- 設定5: 1/123.7
- 設定6: 1/117.4
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約40G/50枚（代表値・設定1基準表記）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- NOT_APPLICABLE（ノーマル機。AT/ART純増概念なし）

## basicPayout
- BIG: 約240枚
- REG: 約96枚
信頼度: OFFICIAL_SITE_PRESENTATION / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井・救済機能: 非搭載。
- 規定ゲーム数モード、CZ、AT、引き戻しゾーン: 非搭載。
- GOGO!ランプ点灯でボーナス確定。完全後告知。
- ホール経営上の主要な設定差はボーナス確率、とくにREG確率。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_APPLICABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更による天井短縮・朝一専用モード・CZ/AT優遇は存在しない。規定ゲーム数やモードを持たないノーマル機のため、設定変更後も通常のボーナス抽選から開始する。
- ただし6号機ジャグラー系の設定変更判別として、設定変更後1G目のリール始動時にわずかな「ガックン」が発生することをパチマガスロマガのゴーゴージャグラー3個別記事で確認。
- 設定そのものを変更すれば以後のBIG/REG確率は新設定に従うが、これはリセット恩恵ではなく設定値の変更そのもの。
信頼度: ANALYSIS_HIGH_FOR_GAME_STRUCTURE / ANALYSIS_EXPERT_FOR_GACKUN

### carryOverBehavior
- 据え置き時に引き継ぐべき天井G・通常モード・内部状態・有利区間は本機には存在しない。
- 据え置きでも通常の独立ボーナス抽選を継続する。
- 前日ボーナス履歴に紐づくスペシャルBGM条件が残るため、朝一BIG時のBGM変化が据え置き推測材料になるという専門実戦資料あり。
信頼度: ANALYSIS_HIGH_FOR_STRUCTURE / ANALYSIS_EXPERT_FOR_BGM_DETECTION

### powerCycleBehavior
- 純電源OFF→ONで影響を受ける天井・モード・状態・有利区間は `NOT_APPLICABLE`。
- 純電断のみを設定変更と同一視する資料は確認できず、ゲーム性上も朝一優遇/不利は確認されない。
- 純電断時のリールガックン有無をゴーゴージャグラー3固有条件として明記した高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。設定変更ガックンとの混同を避ける。

### gameCounterReset
- 内部天井ゲーム数: NOT_APPLICABLE（天井非搭載）。
- 規定ゲーム数による抽選状態: NOT_APPLICABLE。
- ホールの外部データカウンター表示は設備側仕様であり、本機内部resetBehaviorには含めない。

### ceilingAfterReset
- NOT_APPLICABLE。本機は通常時天井・リセット天井とも非搭載。

### modeAfterReset
- NOT_APPLICABLE。通常時の規定ゲーム数モード・朝一専用モードは非搭載。

### stateAfterReset
- 朝一だけ当たりやすくなる内部状態・高確状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時は独立したボーナス抽選を行うノーマル機として扱う。

### advantageousSectionReset
- NOT_APPLICABLE。本機はノーマルタイプで、AT機の有利区間による朝一管理対象として扱わない。

### resetBenefits
- 設定変更専用の天井短縮、当選率上昇、CZ/AT優遇などは `NONE_CONFIRMED / NOT_APPLICABLE`。
- 設定変更後1G目のガックンは恩恵ではなく変更判別要素。

### resetPenalties
- 設定変更専用の明確な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **リールガックン:** パチマガスロマガのゴーゴージャグラー3個別記事では、6号機ジャグラーも設定変更後1G目にわずかなリール始動の引っ掛かり（ガックン）が生じ、変更判別が可能と説明。肉眼判別には慣れが必要。
- 店側が開店前に1G回す等の対策を行えばガックンは消化され得るため、「ガックンなし＝据え置き確定」にはしない。
- **朝一BIGのBGM:** 同記事では、朝一BIGでスペシャルBGM変化が発生した場合は据え置きの可能性が極めて高いという6号機ジャグラー共通の実戦知見を提示（ガリぞう調べ）。公式仕様値ではないため `ANALYSIS_EXPERT` として扱う。
- 外部データカウンターの前日履歴は店舗設備依存であり、実機固有の変更確定要素にはしない。

### numericResetData
- リセット専用天井G: NOT_APPLICABLE
- リセット専用モード振り分け: NOT_APPLICABLE
- 朝一特定G以内の優遇当選率: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更専用の初当たり/CZ数値: NOT_APPLICABLE
- ガックン発生率の公開固定値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

### publicMorningNumbers
- 朝一専用の当選率・短縮天井・モード振り分け等の公開数値は `NONE / NOT_APPLICABLE`。
- 変更判別は数値恩恵ではなく、主に1G目ガックンという挙動情報。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ゴーゴージャグラー3 / ゴージャグ3 / Sゴーゴージャグラー3KA / 北電子` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 1G目 / リール / BGM / 天井 / モード / 状態 / 有利区間` を組み替えて検索。
- 北電子公式、業界記事、公安委員会検定情報系、K-Navi、なな徹、一撃、ちょんぼりすた、パチマガスロマガ、ジャグラー専門資料、回顧/実戦資料を横断。
- 本機には天井・モード・CZ/AT等がないため、該当しない項目を無理にUNVERIFIED化せず `NOT_APPLICABLE` として明示。
- 純電源OFF→ON時のガックン有無など、機種固有の直接資料を固定できなかった項目のみUNVERIFIEDを残した。

## sources
取得日: 2026-09-13
- 北電子公式 ゴーゴージャグラー3: https://www.kitadenshi.co.jp/products/2023/ggj3/
- 遊技日本 / P-WORLD転載（型式名・設定別BB/RB/合算/出玉率）: https://news.p-world.co.jp/articles/24080/nippon
- グリーンべると / P-WORLD転載（2023-07-03導入・BB約240枚/RB約96枚）: https://news.p-world.co.jp/articles/24637/greenbelt
- G-net 大阪府公安委員会公示（Sゴーゴージャグラー3KA / 検定番号2S0743）: https://g-net-ps.com/industry/certif-2023-0210/
- 遊技通信 東京都公安委員会検定情報（型式・検定番号2S0743）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B42%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%882/
- K-Navi（導入日・基本スペック）: https://p-kn.com/slot/3972/
- なな徹（ボーナス基本性能）: https://nana-press.com/kaiseki/machine/565/15595/
- 一撃（BIG約240枚・REG約96枚）: https://1geki.jp/slot/s_gogojuggler3/61/
- ちょんぼりすた（約40G/50枚・天井非搭載・スペック）: https://chonborista.com/slot/kitadenshi/187825/
- パチマガスロマガ「ゴーゴージャグラー3の立ち回り＆小ネタ」（設定変更後1G目ガックン、朝一BIG BGMによる据え置き推測）: https://p.hisshobon.jp/vpage/2490/22

## missingFields
- 純電源OFF→ONだけを行った際のリールガックン有無: UNVERIFIED_AFTER_RESEARCH
- 設定変更後1G目ガックンの公開発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- なし。主要スペックは業界発表・複数解析で一致。
- 世代表現は資料に「6号機」「6.5号機」の双方があるため、規制上のゲーム性分類はノーマル6号機として保持し、導入時代タグとして6.5号機時代を併記。数値競合ではない。

coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_APPLICABLE_FIELDS
