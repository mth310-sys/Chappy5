# パチスロ ベルセルク

machineName: パチスロ ベルセルク
manufacturer: 七匠（NANASHOW）
releaseDate: 2015-03-02
releaseDatePrecision: exact_hall_start_with_conflict
releaseDateNote: PiDEAは2015-01-19時点で納品日2015-03-01予定。一撃・パチ7・パチ&スロ必勝本は2015-03-02導入。一方K-Naviのみホール導入開始2015-03-09としており、03-02をcanonical、03-09をCONFLICTとして保持する。
generation: 5号機
systemType: ART / 擬似ボーナス / CZ / 1G連ストック
modelName: パチスロベルセルクS
modelNameConfidence: ANALYSIS_SINGLE_RETROSPECTIVE
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT_AND_RESET_BEHAVIOR_V0_7

## identity

- 七匠の新規参入第1弾。フィールズが2015-01-15発売発表、PiDEAが2015-01-19に報道。
- 型式名 `パチスロベルセルクS` は後年整理DBで確認したが、公的検定資料を直接固定できなかったため単一二次扱い。
- 検定番号は `ベルセルク / パチスロベルセルクS / 七匠 / NANASHOW / 型式 / 検定番号 / 検定通過` を組み替え再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.7% |
| 3 | 100.3% |
| 4 | 104.5% |
| 5 | 109.0% |
| 6 | 112.6% |

- パチ&スロ必勝本、一撃、K-Navi、後年整理DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART / 擬似ボーナス初当たり

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/221.8 |
| 2 | 1/210.6 |
| 3 | 1/198.9 |
| 4 | 1/183.7 |
| 5 | 1/173.1 |
| 6 | 1/160.8 |

- パチ&スロ必勝本、一撃、K-Naviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G / 50枚**。
- パチマガスロマガの現存解析ページで直接確認し、後年中古実機整理資料・期待値資料とも整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART擬似ボーナス: **約2.3枚/G**。
- P-WORLD、パチマガスロマガ、一撃で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 斬魔BONUS: **40～200G**。赤7入賞ライン数×40G。
- バーサーカーBONUS: **40～200G+α**。
- ファルコンBONUS: **120～711枚**の差枚数管理型。
- 蝕BONUS: 約50枚のリアルボーナス。
- 狂戦士MODE(滅): **11G or 21G**のボーナスストックゾーン。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常モード: 通常A / 通常B / 天国。
- モード別最大天井（前兆32G込み）: **通常A 1000G / 通常B 333G / 天国 100G**。
- 必勝本表現では基礎到達Gが **通常A 968G / 通常B 301G / 天国 68G + 最大32G前兆**。定義差でありCONFLICTとはしない。
- CZ「戦魔CHANCE」は平均15G、期待度50%超。
- ベヘリットポイントは規定ポイント到達でCZ抽選に関与。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_AND_PUBLIC_NUMERIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット**。
- 通常モード・内部状態を **再抽選**。
- ベヘリットポイントは **規定数を再抽選、蓄積数はリセット**。
- 液晶ステージは **森ステージ**。
- confidence: ANALYSIS_HIGH_DIRECT_MULTI_SOURCE

### carryOverBehavior

- 据え置き専用表現の独立資料は今回限定的だが、設定変更なしの電源OFF→ON契約として天井・モード・状態・ベヘリットポイントの引継ぎを本機固有解析で確認。
- 本DBではホール閉店→翌朝の据え置き運用と整合する `CARRY_OVER_CONFIRMED_VIA_POWER_CYCLE_CONTRACT` と記録する。
- 液晶表示上は森ステージへ戻るため、見た目だけでは内部引継ぎを否定できない。

### powerCycleBehavior

- 設定変更なしの **電源OFF→ON**:
  - 天井ゲーム数: **引き継ぐ**
  - モード・状態: **引き継ぐ**
  - ベヘリットポイント規定数: **引き継ぐ**
  - ベヘリットポイント蓄積数: **引き継ぐ**
  - 液晶ステージ: **森ステージ**
- confidence: ANALYSIS_HIGH_DIRECT

### gameCounterReset

- 設定変更時: **RESET**。
- 純電断 / 据え置き: **CARRY_OVER**。
- 通常Aの基礎到達は968G、最大32G前兆込みで1000G。

### ceilingAfterReset

- 固定一律の短縮天井ではない。
- 設定変更後はモードを再抽選するため、通常Bなら最大333G、天国なら最大100Gとなり得る。
- `MODE_DEPENDENT_EFFECTIVE_SHORTENING` として扱い、固定リセット天井とは区別する。

### modeAfterReset

設定変更時の通常モード振り分け:

| 設定 | 通常A | 通常B | 天国 |
|---:|---:|---:|---:|
| 1-3 | 75.0% | 20.0% | 5.0% |
| 4 | 75.0% | 18.8% | 6.3% |
| 5 | 75.0% | 17.2% | 7.8% |
| 6 | 75.0% | 15.0% | 10.0% |

- 高設定ほど天国スタート率が上昇。
- confidence: ANALYSIS_HIGH_DIRECT

### stateAfterReset

設定変更時の低確 / 高確 / 超高確振り分け:

| 設定 | 低確 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1-3 | 75.0% | 21.9% | 3.1% |
| 4 | 66.7% | 30.2% | 3.1% |
| 5 | 59.4% | 37.5% | 3.1% |
| 6 | 50.0% | 46.9% | 3.1% |

- 高設定ほど高確スタート率が高い。
- confidence: ANALYSIS_HIGH_DIRECT

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時、通常B / 天国が選ばれれば通常Aより早い天井となる。
- 設定6は天国スタート **10.0%**、高確 **46.9%** + 超高確 **3.1%**。
- ベヘリットポイント系も設定変更専用に再抽選され、BPモードは25%以上が天国A/B側となる。

### resetPenalties

- 蓄積済みベヘリットポイントは設定変更で **リセット**されるため、前日蓄積が大きい台では明確な消失要素。
- それ以外の設定変更専用主要不利契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 液晶は設定変更・純電断とも **森ステージ**となるため、森ステージ単独では変更判別不可。
- 当時解析で、設定変更時はベルこぼし目（ベル大V字）出現まで **斜めリプレイが揃う挙動**を利用した朝一変更判別が紹介されている。対策されている場合は不可。
- 本機固有の一般的な「リールガックン」確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

#### 通常モード
- 設定1-3: 通常A 75.0 / 通常B 20.0 / 天国 5.0%
- 設定4: 75.0 / 18.8 / 6.3%
- 設定5: 75.0 / 17.2 / 7.8%
- 設定6: 75.0 / 15.0 / 10.0%

#### 状態
- 設定1-3: 低確75.0 / 高確21.9 / 超高確3.1%
- 設定4: 66.7 / 30.2 / 3.1%
- 設定5: 59.4 / 37.5 / 3.1%
- 設定6: 50.0 / 46.9 / 3.1%

#### BPモード
- 設定1-3: 通常A37.5 / 通常B25.0 / 通常C12.5 / 天国A18.8 / 天国B6.3%
- 設定4-6: 通常A21.7 / 通常B25.0 / 通常C20.0 / 天国A22.2 / 天国B11.1%

### publicMorningNumbers

- 設定変更時の通常モード・内部状態・BPモード振り分けを公開値として保存。
- 実効天井はモード依存で最大 **100 / 333 / 1000G（前兆込み）**。
- 朝一斜めリプレイ継続挙動が変更推測材料。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `パチスロ ベルセルク / パチスロベルセルク / ベルセルク / パチスロベルセルクS / 七匠 / NANASHOW`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源 / 天井 / モード / 状態 / 高確 / ベヘリットポイント / ガックン / 斜めリプレイ / 50枚 / 1000円 / ベース / コイン持ち / 型式 / 検定`。
- 資料系統: PiDEA業界記事、P-WORLD、パチ&スロ必勝本、一撃、K-Navi、パチ7、パチマガスロマガ、当時攻略記事、後年整理DB。
- 2023年スマスロ「ベルセルク無双」は別機種として除外。

## conflicts

- releaseDate: **2015-03-02 vs 2015-03-09**。PiDEAの納品3/1予定 + 一撃/パチ7/必勝本の03/02をcanonical。K-Navi03/09を競合保持。
- 天井 `968 / 301 / 68G` と `1000 / 333 / 100G` は、後者が最大32G前兆を含む最大天井表記のため定義差。平均化しない。

## sources

取得日: 2026-09-07

1. PiDEA「七匠『パチスロ ベルセルク』新規参入第1弾」— https://www.pidea.jp/articles/%E4%B8%83%E5%8C%A0%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%83%99%E3%83%AB%E3%82%BB%E3%83%AB%E3%82%AF%E3%80%8D%E6%96%B0%E8%A6%8F%E5%8F%82%E5%85%A5%E7%AC%AC1%E5%BC%BE
2. パチ&スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/2525/1/50340
3. パチ&スロ必勝本 天井&設定変更 — https://p.hisshobon.jp/machine/2525/1/51151
4. 一撃 機種TOP — https://1geki.jp/slot/berserk/
5. 一撃 天井/設定変更 — https://1geki.jp/slot/berserk/3/
6. 一撃 モード移行抽選 — https://1geki.jp/slot/berserk/63/
7. 一撃 状態移行抽選 — https://1geki.jp/slot/berserk/64/
8. 一撃 ベヘリットポイント — https://1geki.jp/slot/berserk/67/
9. P-WORLD — https://www.p-world.co.jp/machine/database/7640
10. K-Navi — https://p-kn.com/slot/2221/
11. パチ7 — https://pachiseven.jp/machines/4419/cutout/74
12. パチマガスロマガ 50枚あたりゲーム数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/01/c.php
13. パチマガスロマガ 斬魔BONUS — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/01/03.php
14. すろぱちくえすと 朝一リセット判別 — https://www.slopachi-quest.com/article/berserk0-reset-check/
15. pachinavi 後年整理（型式名）— https://pachinavi.net/machines/berserk-1/

## missingFields

- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- modelNameは公的検定資料未固定のため信頼度を限定。

## recordQuality

- coreStatus: COMPLETE_CORE
- resetBehaviorStatus: COMPLETE_WITH_DIRECT_NUMERIC_AND_POWER_CYCLE_EVIDENCE
- confidenceSummary: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_FOR_RELEASE / CONFLICT_RELEASE_DATE
