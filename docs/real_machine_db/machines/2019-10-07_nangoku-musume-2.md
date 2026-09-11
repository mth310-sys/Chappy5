# パチスロ 南国娘2

recordNo: 1308
machineName: パチスロ 南国娘2
machineNameVariants: 南国娘2 / S南国娘2 / 南国娘2 25Φ
manufacturer: 平和
formalModel: S南国娘2H2
certificationNumber: 8S1296
releaseDate: 2019-10-07
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ / 25Φ

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 5 | 104.7% |
| 6 | 109.4% |

HAZUSE・一撃・DMM系機種DBで照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス(AT)初当たり |
|---|---:|
| 1 | 1/346.4 |
| 2 | 1/331.2 |
| 5 | 1/289.0 |
| 6 | 1/252.1 |

HAZUSE・一撃で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1〜6: 約50.8〜54.0G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス: 約6.0枚/G。
- ボーナス後のサービスAT「南国タイム」は現状維持型。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- BIG CHANCE: 20〜80G、約120〜480枚。
- SPECIAL BIG CHANCE: 80G、約480枚。
- ENDING BONUS: 80G、約480枚。4連目到達時に突入し有利区間完走濃厚。
- ボーナス後は80Gまたは150GのサービスAT「南国タイム」。
- 25Φは引き戻し重視。南国タイム80G時の引き戻し率約24〜44%、150G時約39〜71%。

## modeSpecificMinimumData

- 有利区間移行時に4種類のテーブルから1つをセット。
- テーブルと連荘回数に応じた内部モードでボーナス継続G数・南国タイム中のストック期待度が変化。
- 通常時は小役抽選と規定ゲーム数消化が主なボーナス契機。
- 8GのCZ「南国チャンス」搭載。
- 有利区間移行後700G消化で天井到達しボーナス当選。
- 完全再現用の詳細内部抽選は収録対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井RESET / テーブルRESET / 有利区間RESET**。
- 設定変更後は非有利区間から開始する当時解析を確認。

### carryOverBehavior

- 据え置き朝一について、当時攻略表では **天井引継ぎ / テーブル引継ぎ** と整理される。
- リール下の表示G数は設定変更・据え置きの双方でリセットされるため、表示G数のみで内部天井進捗を判断しない。

### powerCycleBehavior

- 電源OFF→ONのみでは **天井CARRY_OVER / テーブルCARRY_OVER / 有利区間CARRY_OVER** とする当時解析を複数確認。
- 液晶/リール下の表示G数はリセットされる資料があるため、内部進捗とは区別する。

### gameCounterReset

- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: 内部天井進捗CARRY_OVER。
- リール下の表示ゲーム数は朝一リセットされるため、内部カウンタと表示を別属性として保持。

### ceilingAfterReset

- 通常天井: 有利区間移行後700G。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 本機では有利区間移行時にテーブルを抽選。
- 設定変更時: テーブルRESET / 再セット。
- 据え置き・純電断: テーブルCARRY_OVER。
- リセット専用テーブル振り分けの比較可能な公開数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更後は非有利区間から開始。
- ボーナス後サービスAT・南国チャンス等の途中状態を含む細部の電断復帰契約は、物差しに必要な公開範囲を超えるため追加推測しない。

### advantageousSectionReset

- 設定変更: RESET / 非有利区間開始。
- 電源OFF→ONのみ: CARRY_OVER。
- 通常時は有利区間ランプが消灯するタイプとする当時攻略があり、朝一ランプ単独での変更判別には使えない。

### resetBenefits

- 設定変更による特別な朝一恩恵は **「特になし」** とする当時攻略を確認。
- 短縮天井・朝一専用高確・専用当選率などの数値恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常時有利区間ランプ消灯型のため、朝一ランプでは判別困難。
- ガックン判別は「不可 / おそらく不可」とする当時攻略があり、確定判別材料には採用しない。
- リール下G数は設定変更・据え置き双方でリセットされるため変更判別に使用不可。

### numericResetData / publicMorningNumbers

- リセット後専用のモード振り分け、特定G以内当選率、恩恵発生率など比較可能な公開確定数値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- 通常時の設定別初当たりや南国タイム引き戻し率は朝一専用数値ではないため別管理。

### resetBehavior 再探索メモ

「南国娘2 / S南国娘2H2 / 25パイ / 平和」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / テーブル / モード / 有利区間 / 有利区間ランプ / ガックン / 変更判別」を組み合わせ、当時業界記事、HAZUSE、一撃、ちょんぼりすた、期待値系当時攻略、P-WORLDを横断。設定変更と純電断の天井・テーブル・有利区間挙動は複数系統で整合した。

## qualityNotes / conflicts

- 25Φと30Φは同時期発売だが、25Φは平和 `S南国娘2H2` / 検定番号 `8S1296`、30Φはアムテックスの別型式・別スペック。独立レコード化する。
- 当時業界記事は納品予定を2019-10-06と記載する一方、HAZUSE・一撃・DMM系機種DBはホール導入開始日を2019-10-07とする。DBのreleaseDateはホール導入日基準のため2019-10-07をcanonical採用し、10/06は納品予定日として平均化しない。
- 天井はHAZUSEで「有利区間移行後700G」、ちょんぼりすた等では概数「約700G」。矛盾なし。

## sources

取得日: 2026-09-11

1. P-WORLD / 遊技通信 — 平和のパチスロ南国シリーズ最新作、純増6枚のランクアップ式ボーナス搭載
   - https://news.p-world.co.jp/articles/11606/yugitsushin
   - 2019-08-05。25Φ/30Φの2仕様、純増6枚、25Φ約120〜480枚、30Φ約120〜540枚、納品予定10月6日を確認。
   - reliability: INDUSTRY / CONTEMPORARY
2. PiDEA X — 6号機パトライト第2弾「南国娘2」を発表／平和
   - https://www.pidea.jp/articles/6%E5%8F%B7%E6%A9%9F%E3%83%91%E3%83%88%E3%83%A9%E3%82%A4%E3%83%88%E7%AC%AC2%E5%BC%BE%E3%80%8C%E5%8D%97%E5%9B%BD%E5%A8%982%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E5%B9%B3%E5%92%8C
   - 2019-08-02。25Φ/30Φの仕様差、疑似ボーナス、南国タイム、納品予定10月6日。
   - reliability: INDUSTRY / CONTEMPORARY
3. HAZUSE — パチスロ 南国娘2
   - https://hazuse.com/machine/pachislot/8S1296/
   - 型式S南国娘2H2、検定番号8S1296、2019-10-07、設定別初当たり/出玉率、50枚50.8〜54.0G、純増約6枚/G、天井700G、テーブル構造。
   - reliability: ANALYSIS_HIGH
4. 一撃 — S南国娘2
   - https://1geki.jp/slot/s_nmusume2/
   - 2019-10-07、設定別初当たり/出玉率、25Φ/30Φ別仕様、純増・引き戻し特性を確認。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — 南国娘2(25π) 解析まとめ
   - https://chonborista.com/slot/orinpia-slot/90149/
   - 設定変更時天井/有利区間リセット、電源OFF→ON時引継ぎ、天井約700G。
   - reliability: ANALYSIS_HIGH
6. スロパチクエスト — 南国娘2 25パイ 天井解析
   - https://www.slopachi-quest.com/article/nanngokumusume2-25-tennjou/
   - 朝一表: 設定変更で天井/テーブルリセット、電源OFF→ONで引継ぎ、表示G数は双方リセット、リセット恩恵特になし、ランプ/ガックン判別困難。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY_STRATEGY
7. P-WORLD機種DB — パチスロ 南国娘2
   - https://www.p-world.co.jp/machine/database/9012
   - 平和、6号機AT、純増6枚、BIG20〜80G / SP・ED80G等を確認。
   - reliability: DATABASE

## missingFields

- 設定変更時のテーブル振り分け公開数値
- リセット後特定G以内当選率等の朝一専用数値
- メーカー一次のガックン発生条件

## conflicts

- releaseDate周辺: 2019-10-06は業界記事の納品予定、2019-10-07は解析/機種DBの導入開始日。ホール導入時系列では2019-10-07採用。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
