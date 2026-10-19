# Sリング 恐襲ノ連鎖

recordNo: 1328
machineName: Sリング 恐襲ノ連鎖
machineNameVariants: リング 恐襲ノ連鎖 / リング3 / Sリング恐襲ノ連鎖 / Sリング 恐襲ノ連鎖JA
manufacturer: JFJ（藤商事グループ）
formalModel: Sリング 恐襲ノ連鎖JA
certificationNumber: UNVERIFIED
releaseDate: 2020-01-06
releaseDateNote: 1geki、K-Navi、ちょんぼりすた等で2020-01-06導入が一致。藤商事決算資料では製品発売月を2019年12月と記載しており、メーカー出荷/発売月と全国ホール導入開始日を分離して保持する。
generation: 6号機
systemType: AT / CZ・疑似ボーナス経由型 / 可変純増

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.7% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 104.6% |
| 5 | 107.4% |
| 6 | 110.0% |

複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 終焉ノ回廊 | SPIRAL BONUS | 初当り合算 |
|---|---:|---:|---:|
| 1 | 1/404.3 | 1/869.2 | 1/367 |
| 2 | 1/393.9 | 1/842.4 | 1/359 |
| 3 | 1/373.3 | 1/781.8 | 1/342 |
| 4 | 1/342.7 | 1/609.6 | 1/316 |
| 5 | 1/322.5 | 1/526.7 | 1/299 |
| 6 | 1/304.8 | 1/456.0 | 1/284 |

JFJ公式は終焉ノ回廊/SPIRAL BONUSの主要確率を設定別掲載。合算は解析資料値。

信頼度: OFFICIAL_FOR_MAJOR_HITS + ANALYSIS_HIGH_FOR_COMBINED

## baseGamesPer50

- 約51G/50枚。
- 複数解析で一致。初期記事に約50G表記もあるため丸め差として扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 終焉ノ回廊: 約2.0枚/G。
- SPIRAL BONUS: 約5.0枚/G。
- 引き戻しZONE「呪縛SPIRAL」のストーリーパートも約2.0枚/G。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE + P-WORLD

## basicPayout

- 終焉ノ回廊: 40G+α、純増約2.0枚/G。
- SPIRAL BONUS: 10〜100G、純増約5.0枚/G。
- 図柄別初期G数: 赤7 10G / 青7 15G / 黒BAR 20G。
- SPIRAL BONUS後は最大55Gの引き戻しZONE「呪縛SPIRAL」へ移行。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE + P-WORLD

## modeSpecificMinimumData

- 通常時モード: 通常A / 通常B / チャンス / 天国。
- モード別最大規定G数: 通常A 896G / 通常B 768G / チャンス 384G / 天国 128G。
- 最大896G+α到達で井戸ステージへ移行し、終焉ノ回廊以上が期待される。
- 井戸ステージ33G継続時はSPIRAL BONUS濃厚。
- 有利区間移行時は成立役に応じて、有利区間移行のみ / CZ前兆 / 終焉ノ回廊前兆 / SPIRAL BONUS前兆を抽選。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 天井ゲーム数: **RESET**。
- 内部状態: **再抽選**。
- 内部モード: **再抽選**。
- 有利区間: **RESET後、非有利区間を経て再移行**。
- 朝一液晶G数: 非表示。
- 朝一TVモニター/早送り表示: 非表示。
- 有利区間移行時は時計演出が発生し、表示キャラでモードを示唆する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定変更なし据え置きでは、天井ゲーム数・内部状態・内部モードを引き継ぐ。
- 朝一の見た目は設定変更時と近く、液晶G数およびTVモニター/早送り表示は非表示になるため、表示だけでは判別しにくい。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 電源OFF→ONのみ: **天井ゲーム数引継ぎ**。
- **内部状態引継ぎ**。
- **内部モード引継ぎ**。
- **有利区間ランプ状態引継ぎ**。
- 朝一液晶G数、TVモニター/早送り表示は非表示。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: 内部天井ゲーム数RESET。
- 据え置き / 電源OFF→ONのみ: 内部天井ゲーム数CARRY_OVER。
- ただし朝一液晶G数は設定変更・据え置きとも非表示となるため、表示G数と内部進行を分離して扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 設定変更専用の一律短縮天井は確認できず。
- モード再抽選後、通常A 896G / 通常B 768G / チャンス 384G / 天国 128Gの各天井が適用される。
- 設定変更時のみの専用モード振り分け数値は今回の再探索で固定できず。

信頼度: ANALYSIS_HIGH_FOR_MODE_CEILINGS / UNVERIFIED_FOR_RESET_ONLY_MODE_DISTRIBUTION

### modeAfterReset

- 設定変更: **内部モード再抽選**。
- 据え置き / 電源OFF→ONのみ: **内部モード引継ぎ**。
- 有利区間移行時の時計演出でモード示唆が出る。
- 朝一専用モード名称は確認できず。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 設定変更: **内部状態再抽選**。
- 据え置き / 電源OFF→ONのみ: **内部状態引継ぎ**。
- 設定変更時の状態振り分け公開数値は今回固定できず。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CONTRACT / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset

- 設定変更: 有利区間RESET。
- 据え置き / 電源OFF→ONのみ: 有利区間状態を引継ぐ。
- 有利区間ランプはクレジット右下のドット。
- 通常時は消灯するタイプのため、設定変更後の消灯だけでは据え置きとの判別ができない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### resetBenefits

- 設定変更専用の明確な短縮天井・専用高モード優遇率・朝一初当たり率は今回の再探索で公開確定値を固定できず。
- 有利区間移行1G目から成立役に応じてCZ以上の前兆へ直行する抽選が存在するが、これは設定変更専用ではなく有利区間移行時共通契約として分離して保存。

### resetPenalties

- 設定変更専用の主要ペナルティ抽選は確認できず。
- 前日内部天井進行・モード・状態を失う点は仕様上のリセット効果であり、専用不利抽選とは区別する。

### resetDetection

- **有利区間ランプ単独では変更判別不可**。通常時消灯タイプ。
- 設定変更・据え置きとも朝一液晶G数とTVモニター/早送り表示が非表示になるため、これらの見た目も単独判別には使えない。
- 解析資料では1G目の時計演出が設定変更時に発生し、電源OFF→ON時も発生する可能性が示されており、確定判別材料にはしない。
- 本機固有のガックン発生条件/率は十分な再探索後も PUBLIC_GAKKUN_VALUE_NOT_FOUND_AFTER_RESEARCH。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_FOR_LAMP_DISPLAY / UNVERIFIED_FOR_GAKKUN

### numericResetData / publicMorningNumbers

#### 有利区間移行時の成立役別移行先抽選
- ベル: 有利区間移行のみ99.6% / CZ1前兆0.4%
- 弱チェリー: 有利区間移行のみ99.6% / CZ2前兆0.4%
- スイカ: 有利区間移行のみ99.6% / CZ2前兆0.4%
- チャンス目A/B: 有利区間移行のみ66.8% / CZ1前兆32.0% / CZ2前兆0.4% / 終焉ノ回廊前兆0.4% / SPIRAL BONUS前兆0.4%
- 強チェリー: CZ1前兆89.5% / CZ2前兆7.0% / 終焉ノ回廊前兆3.1% / SPIRAL BONUS前兆0.4%

※これは設定変更専用率ではなく、有利区間移行時の共通公開値。設定変更直後にも適用されるため朝一客行動に関係する数値として保存。

#### 設定変更専用公開数値
- 専用モード振り分け: PUBLIC_RESET_ONLY_MODE_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- 朝一特定G以内当選率: PUBLIC_RESET_ONLY_EARLY_HIT_RATE_NOT_FOUND_AFTER_RESEARCH
- ガックン発生率: PUBLIC_GAKKUN_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetBehavior 再探索メモ

2026-09-11に `Sリング 恐襲ノ連鎖 / リング 恐襲ノ連鎖 / リング3 / Sリング恐襲ノ連鎖 / Sリング 恐襲ノ連鎖JA / JFJ / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 内部状態 / 有利区間 / ランプ / 時計 / ガックン / 変更判別` を組み合わせ、JFJ公式、検定通過業界記事、1geki、ちょんぼりすた、K-Navi、P-WORLD、当時攻略記事を横断。主要な設定変更/据え置き/純電断契約は複数系統で固定できた。設定変更専用モード振り分け・朝一専用当選率・ガックン率は公開確定値を確認できなかったため推測補完しない。

## sources

取得日: 2026-09-11

1. JFJ公式 — S リング 恐襲ノ連鎖
   - https://www.fujimarukun.co.jp/products/s-ring3/
   - 設定別「終焉ノ回廊」「SPIRAL BONUS」確率を確認
   - reliability: OFFICIAL
2. PiDEA X — 検定通過情報（2019-09-17）
   - https://www.pidea.jp/articles/%E3%80%8Cp%E3%81%B1%E3%81%A1%E3%82%93%E3%81%93%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E2%98%86%E3%83%9E%E3%82%AE%E3%82%AB2h5%E3%80%8D%E3%80%8Cs%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E7%B5%862ft%E3%80%8D%E3%80%8Cs%E3%83%AA%E3%83%B3%E3%82%B0-%E6%81%90%E8%A5%B2%E3%83%8E%E9%80%A3%E9%8E%96-ja%E3%80%8D%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
   - 型式 Sリング 恐襲ノ連鎖JA / JFJを確認
   - reliability: INDUSTRY
3. ちょんぼりすた — リング 強襲ノ連鎖
   - https://chonborista.com/slot/fuji-slot/102105/
   - 約51G/50枚、出玉率、初当り、天井、設定変更/電源OFF→ON、内部状態、有利区間、ランプを確認
   - reliability: ANALYSIS_HIGH
4. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/ringkyoushuu-reset/
   - 設定変更/据え置きの天井・液晶G数・TVモニター・状態・モード・有利区間ランプ対比を確認
   - reliability: ANALYSIS_HIGH
5. 1geki — 有利区間移行抽選
   - https://1geki.jp/slot/s_ringkyousyu/46/
   - 有利区間移行時の成立役別移行先公開値を確認
   - reliability: ANALYSIS_HIGH
6. 1geki — 通常時モード
   - https://1geki.jp/slot/s_ringkyousyu/42/
   - 通常A/B/チャンス/天国と規定G数を確認
   - reliability: ANALYSIS_HIGH
7. 1geki — 終焉ノ回廊
   - https://1geki.jp/slot/s_ringkyousyu/61/
   - 40G+α / 約2.0枚/Gを確認
   - reliability: ANALYSIS_HIGH
8. P-WORLD — 機種情報
   - https://www.p-world.co.jp/machine/database/9091
   - 6号機AT、終焉ノ回廊、SPIRAL BONUS、純増、図柄別初期G数、天井概要を確認
   - reliability: INDUSTRY_DATABASE
9. K-Navi — Sリング 恐襲ノ連鎖
   - https://p-kn.com/slot/3357/
   - 2020-01-06導入、初当り合算等を確認
   - reliability: ANALYSIS_HIGH
10. 藤商事 2020年3月期資料
   - https://assets.minkabu.jp/news/article_media_content/urn%3Anewsml%3Atdnet.info%3A20200529429594/140120200529429594.pdf
   - メーカー側発売月2019年12月表記を確認。ホール導入日とは定義分離
   - reliability: OFFICIAL_CORPORATE

## missingFields

- certificationNumber（検定番号）
- 設定変更専用モード振り分け
- 設定変更専用朝一特定G以内当選率
- 本機固有ガックン条件/率

## conflicts

- メーカー決算資料は「2019年12月発売」、全国導入カレンダー/攻略DBは「2020年1月6日導入」。発売/出荷月とホール導入開始日の定義差として保持し、releaseDate canonicalは2020-01-06。
- baseGamesPer50は初期記事に約50G、後発複数解析に約51G。丸め差として約51Gをcanonical。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
